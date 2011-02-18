package Schema;

use strict;
use warnings;

use Moose;
use namespace::clean -except => 'meta';
extends 'DBICx::Hybrid::Schema';
#extends 'DBIx::Class::Schema';
=head1 NAME

SneakyCat::Controller::Ideas - Catalyst Controller

=head1 DESCRIPTION

Catalyst Controller.

=head1 METHODS

=cut


=head2 index

index just forwards to share.  

=cut



__PACKAGE__->load_namespaces(
        result_namespace => 'Result',
        resultset_namespace => 'ResultSet',
        default_resultset_class => '+DBICx::Hybrid::ResultSet');

#has "user" => (isa => "Int", is => "rw", default => 1);
# Created by DBIx::Class::Schema::Loader v0.04006 @ 2009-08-13 21:11:53
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:N0Xbzj17pzNa19V7V+UXzQ
=pod
sub init_schema {
    my $self = shift;
	my $name = shift || ':memory:';
	my $db = shift || 'SQLite';
	my $user = shift;
	my $password = shift;
	my $host = shift || 'localhost';

    my $schema = $self->connect("dbi:$db:dbname=$name;host=$host", $user, $password) || die "Could no connect";

	$schema->log("schema instantiated") if $schema;
	return $schema;
}
=cut
__PACKAGE__->meta->make_immutable(inline_constructor => 0 );
# You can replace this text with custom content, and it will be preserved on regeneration
1;
