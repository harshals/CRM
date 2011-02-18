package Master::Result::User;

use strict;
use warnings;

use Moose;
use namespace::clean -except => 'meta';
extends qw/DBICx::Hybrid::Result/;


__PACKAGE__->table("user");
__PACKAGE__->add_columns(

		"username", { data_type => "VARCHAR(200)", is_nullable => 0 },
		"password", { data_type => "VARCHAR(200)", is_nullable => 0 },
		"application_id", { data_type => "INTEGER", is_nullable => 1 },
		"profile_id", { data_type => "INTEGER", is_nullable => 1 },
);

__PACKAGE__->add_base_columns;

__PACKAGE__->set_primary_key("id");


__PACKAGE__->belongs_to(
  "application",
  "Master::Result::Application",
  { "foreign.id" => "self.application_id" },
);


## Force Array return
# Created by DBIx::Class::Schema::Loader v0.04006 @ 2009-08-13 21:11:53
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:obZUGgvkve3e6mzPk8GEEg

sub extra_columns {
    
    my $self = shift;

    return qw/notes/;
};

sub my_relations {

    my $self = shift;
	return qw/application /;
}

sub collegues {

	my $self = shift;

	my $params = shift;
	my $search  = {};

	## my search parameters are title, publish_date, price and classification
	
	$self->application->users;

};



__PACKAGE__->meta->make_immutable(inline_constructor => 0);
1;
