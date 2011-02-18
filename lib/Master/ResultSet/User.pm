#
#===============================================================================
#
#         FILE:  User.pm
#
#  DESCRIPTION:  
#
#        FILES:  ---
#         BUGS:  ---
#        NOTES:  ---
#       AUTHOR:  Harshal Shah (Hs), <harshal.shah@gmail.com>
#      COMPANY:  MK Software
#      VERSION:  1.0
#      CREATED:  02/11/2011 18:27:43 IST
#     REVISION:  ---
#===============================================================================

use strict;
use warnings;
package Master::ResultSet::User;

use Moose;
use namespace::clean -except => 'meta';
extends qw/DBICx::Hybrid::ResultSet::User/;
use Carp;

=head2 resultset->by_profile($profile_id) 

Find a given user by profile_id (Contacts)

returns Result row

=cut



1;


