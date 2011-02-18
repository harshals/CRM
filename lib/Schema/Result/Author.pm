package Schema::Result::Author;

use strict;
use warnings;

use Moose;
use namespace::clean -except => 'meta';
extends qw/DBICx::Hybrid::Result/;
use Data::Dumper qw/Dumper/;

__PACKAGE__->table("author");
__PACKAGE__->add_columns(

		"first_name", { data_type => "VARCHAR(20)", is_nullable => 0 },
		"last_name", { data_type => "VARCHAR(20)", is_nullable => 0 },
);

__PACKAGE__->add_base_columns;

__PACKAGE__->add_unique_constraint([qw/first_name last_name/]);

__PACKAGE__->set_primary_key("id");

__PACKAGE__->has_many(
  "author_books",
  "Schema::Result::AuthorBooks",
  { "foreign.author_id" => "self.id" },
);

__PACKAGE__->many_to_many( "books" => "author_books"=> "book");

__PACKAGE__->has_many(
  "author_affiliations",
  "Schema::Result::AuthorAffiliations",
  { "foreign.author_id" => "self.id" },
);

__PACKAGE__->many_to_many( "affiliations" => "author_affiliations", "affiliate");

__PACKAGE__->has_many(
  "author_category",
  "Schema::Result::AuthorCategories",
  { "foreign.author_id" => "self.id" },
);

__PACKAGE__->many_to_many( "categories" => "author_category", "category");




#__PACKAGE__->result_class('DBIx::Class::ResultClass::HashRefInflator');

# Created by DBIx::Class::Schema::Loader v0.04006 @ 2009-08-13 21:11:53
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:obZUGgvkve3e6mzPk8GEEg
sub extra_columns {
    
    my $self = shift;
	my @columns = $self->next::method(@_);

    push @columns, qw/country review url/;

	return @columns;
};

override 'my_relations' => sub {
	
	my $self = shift;

	return qw/books categories affiliations/;
};

augment 'serialize'=> sub {

    my $self = shift;
	my $options = shift;
	
	return {} if $options->{'skip_relationships'};
	
	my $rel_hash = {};

	foreach my $rel (qw/books categories affiliations/) {
		
		$rel_hash->{$rel} = ($options->{'only_primary_keys'}) ?  [$self->$rel->get_column('id')->all ] : $self->$rel->serialize;
	}

	return 	$rel_hash;

};
# You can replace this text with custom content, and it will be preserved on regeneration


__PACKAGE__->meta->make_immutable(inline_constructor => 0);
1;
