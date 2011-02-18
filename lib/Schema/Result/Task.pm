package Schema::Result::Task;

use strict;
use warnings;

use Moose;
use namespace::clean -except => 'meta';
extends qw/DBICx::Hybrid::Result/;

## additional custom columns

#__PACKAGE__->add_columns(
#		"is_important", { data_type => "INTEGER", is_nullable => 0 },
#);


__PACKAGE__->table("task");
__PACKAGE__->add_columns(

		"name", { data_type => "VARCHAR(200)", is_nullable => 0 },
		"assigned_by", { data_type => "INTEGER", is_nullable => 0 },
		"assigned_to", { data_type => "INTEGER", is_nullable => 0 },
		"place", { data_type => "VARCHAR(200)", is_nullable => 1 },
		"due_date", { data_type => "DATETIME", is_nullable => 1 },
		"category", { data_type => "VARCAHR(200)", is_nullable => 1 },
		"task_status", { data_type => "VARCAHR(20)", is_nullable => 1 },
);

__PACKAGE__->add_base_columns;

__PACKAGE__->set_primary_key("id");



__PACKAGE__->belongs_to(
  "owner",
  "Schema::Result::Contact",
  { "foreign.id" => "self.assigned_to" },
);

__PACKAGE__->belongs_to(
  "created_by",
  "Schema::Result::Contact",
  { "foreign.id" => "self.assigned_by" },
);
# Created by DBIx::Class::DB::Schema::Loader v0.04006 @ 2009-08-13 21:11:53
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:obZUGgvkve3e6mzPk8GEEg

# You can replace this text with custom content, and it will be preserved on regeneration


sub extra_columns {
    
    my $self = shift;

    return qw/notes description attachment tag_1 tag_2 tag_3 tag_4 tag_5 tag_6 tag_7 tag_8 tag_9 tag_10/;
};

sub my_relations {

    my $self = shift;
	return qw/owner/;
}




__PACKAGE__->meta->make_immutable(inline_constructor => 0);
1;
