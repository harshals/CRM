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
package Schema::ResultSet::Contact;

use Moose;
use namespace::clean -except => 'meta';
extends qw/DBICx::Hybrid::ResultSet::Contact/;
use Carp;

=head2 resultset->profile($user_id) 

Find a given contact by user_id (User)

Returns a result row

=cut

__PACKAGE__->meta->make_immutable(inline_constructor => 0 );
1;


