package Schema::ResultSet::Author;

use strict;
use warnings;
use Moose;
use namespace::clean -except => 'meta';
use Carp;

extends qw/DBICx::Hybrid::ResultSet/;



__PACKAGE__->meta->make_immutable(inline_constructor => 0 );

1;
