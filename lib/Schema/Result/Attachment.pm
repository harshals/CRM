package Schema::Result::Attachment;

use strict;
use warnings;

use Moose;
use namespace::clean -except => 'meta';

extends qw/DBICx::Hybrid::Result/;

__PACKAGE__->table("attachment");
__PACKAGE__->add_columns(

	"name", { data_type => "VARCHAR(200)", is_nullable => 0 },
	"path", { data_type => "VARCHAR(200)", is_nullable => 0 },
	"owner_id", { data_type => "INTEGER", is_nullable => 0 },
	"keywords", { data_type => "VARCHAR(200)", is_nullable => 1 },
);

__PACKAGE__->add_base_columns;

__PACKAGE__->set_primary_key("id");

__PACKAGE__->belongs_to(
  "owner",
  "Schema::Result::Contact",
  { "foreign.id" => "self.owner_id" },
);



# Created by DBIx::Class::Schema::Loader v0.04006 @ 2009-08-13 21:11:53
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:obZUGgvkve3e6mzPk8GEEg

sub extra_columns {
    
    my $self = shift;

    return qw/db_user db_pass host port driver description/;
};

sub my_relations {

    my $self = shift;
	return qw/users/;
}
;


__PACKAGE__->meta->make_immutable(inline_constructor => 0);
1;
