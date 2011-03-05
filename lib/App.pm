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

1;


