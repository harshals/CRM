package Schema::Result::AuthorAffiliations;

use strict;
use warnings;

use Moose;
use namespace::clean -except => 'meta';
extends qw/DBICx::Hybrid::Result/;

__PACKAGE__->table("author_affiliate");
__PACKAGE__->add_columns(

		"author_id", { data_type => "INTEGER", is_nullable => 0 },
		"affiliate_id", { data_type => "INTEGER", is_nullable => 0 },
);


__PACKAGE__->set_primary_key(qw/author_id affiliate_id/);

__PACKAGE__->belongs_to(
  "author",
  "Schema::Result::Author",
  { "foreign.id" => "self.author_id" },
);

__PACKAGE__->belongs_to(
  "affiliate",
  "Schema::Result::Affiliate",
  { "foreign.id" => "self.affiliate_id" },
);



# Created by DBIx::Class::Schema::Loader v0.04006 @ 2009-08-13 21:11:53
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:obZUGgvkve3e6mzPk8GEEg

sub extra_columns {
    
    my $self = shift;

    return qw//;
};
# You can replace this text with custom content, and it will be preserved on regeneration


__PACKAGE__->meta->make_immutable(inline_constructor => 0);
1;
