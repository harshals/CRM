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
		
	template 'index';
};

get '/debug' => sub {
	
	return { data =>    vars->{serialize_options}   };
};

get '/pdf/:path' => sub {
	
	my $filename = params->{'path'};

	send_error({error => 'No PDF dir defined ' }) unless -d config->{'pdf_dir'};

	my $pdf = config->{'pdf_dir'} . "/" . $filename . ".tt";
	
	send_error({error => 'No PDF template defined' }) unless -f $pdf;
	
	content_type 'application/pdf';
	
	eval {
		template $pdf, { pdf_template => "$filename.pdf" };
	};

	if ($@) {
		
		debug $@;
	}

	debug "coming here roo";

};

1;


