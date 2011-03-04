package Schema::Result::Enumeration;

use strict;
use warnings;

use Moose;
use namespace::clean -except => 'meta';
extends qw/DBICx::Hybrid::Result/;

## additional custom columns

#__PACKAGE__->add_columns(
#		"is_important", { data_type => "INTEGER", is_nullable => 0 },
#);


__PACKAGE__->table("enumeration");
__PACKAGE__->add_columns(

		"class", { data_type => "VARCHAR(200)", is_nullable => 0 },
		"attr", { data_type => "VARCHAR(200)", is_nullable => 0 },
		"sequence", { data_type => "INTEGER", is_nullable => 0 },
		"value", { data_type => "VARCHAR(20)", is_nullable => 1 },
		"description", { data_type => "VARCHAR(200)", is_nullable => 1 },
		"category", { data_type => "VARCHAR(200)", is_nullable => 0 },
);

__PACKAGE__->add_base_columns;

__PACKAGE__->set_primary_key("id");


# Created by DBIx::Class::DB::Schema::Loader v0.04006 @ 2009-08-13 21:11:53
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:obZUGgvkve3e6mzPk8GEEg

# You can replace this text with custom content, and it will be preserved on regeneration


sub extra_columns {
    
    my $self = shift;

    return qw//;
};

sub my_relations {

    my $self = shift;
	return qw//;
}


__PACKAGE__->meta->make_immutable(inline_constructor => 0);
1;
