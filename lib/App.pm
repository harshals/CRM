#
#===============================================================================
#
#         FILE:  App.pm
#
#  DESCRIPTION:  
#
#        FILES:  ---
#         BUGS:  ---
#        NOTES:  ---
#       AUTHOR:  Harshal Shah (Hs), <harshal.shah@gmail.com>
#      COMPANY:  MK Software
#      VERSION:  1.0
#      CREATED:  02/14/2011 15:29:55 IST
#     REVISION:  ---
#===============================================================================

package App;

use File::chdir;
use File::Spec::Functions qw/catfile rel2abs/;
use File::Temp qw/tmpnam/;
use PDF::Reuse;


use strict;
use warnings;

use Dancer qw(:syntax);

load_app 'Dancer::App::CRM';

before sub {
	
	## some app specific code here
	
};

get '/' => sub {
		
	template 'index', { profile_id => session('profile_id') };
};

get '/debug' => sub {
	
	return { data =>    vars->{serialize_options}   };
};

get '/pdf/:path' => sub {
	
	my $filename = params->{'path'};

	send_error({error => 'No PDF dir defined ' }) unless -d config->{'pdf_dir'};

	my $pdf_template = config->{'pdf_dir'} . "/" . $filename . ".tt";
	
	send_error({error => 'No PDF template defined' }) unless -f $pdf_template;
	
 	my $template = <<'EOT';
    [% USE pdf = Catalyst::View::PDF::Reuse %]
    [% USE barcode = Catalyst::View::PDF::Reuse::Barcode %]
    [% PROCESS $pdf_template %]
EOT

    my $tempfile = tmpnam();
    prInitVars();
    prFile($tempfile);
    
	foreach my $path (@{config->{'template_toolkit'}->{INCLUDE_PATH}}) {
        $path = rel2abs($path);
    }

    my $output;
    SEARCH: foreach my $path (@{$self->config->{INCLUDE_PATH}}) {
        if (-e catfile($path,$c->stash->{pdf_template})) {
            local $CWD = $path;
            $output = $self->render($c,\$template);
            last SEARCH;
        }
    }
    
    prEnd();

    my $pdf;
    local $/ = undef;
    open PDF,'<',$tempfile;
    $pdf = (<PDF>);
    close PDF;
    unlink $tempfile;

    return (UNIVERSAL::isa($output, 'Template::Exception')) ? $output : $pdf;
    


	eval {
		template $pdf, { pdf_template => "$filename.pdf" };
	};

	if ($@) {
		
		debug $@;
	}

	debug "coming here roo";

};

1;


