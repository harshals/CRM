package Schema::Result::Contact;

use strict;
use warnings;

use Moose;
use namespace::clean -except => 'meta';

extends qw/DBICx::Hybrid::Result/;

__PACKAGE__->table("contact");
__PACKAGE__->add_columns(

		"name", { data_type => "VARCHAR(200)", is_nullable => 0 },
		"title", { data_type => "VARCHAR(200)", is_nullable => 0 },
		"company_id", { data_type => "VARCHAR(200)", is_nullable => 0 },
		"is_human", { data_type => "INTEGER", is_nullable => 0 },
		"user_id", { data_type => "INTEGER", is_nullable => 1 },
		"primary_phone",{ data_type => "VARCHAR(200)", is_nullable => 1 },
		"email",{ data_type => "VARCHAR(200)", is_nullable => 1 },
		"business_city", { data_type => "VARCHAR(200)", is_nullable => 1 },
		"web_page", { data_type => "VARCHAR(200)", is_nullable => 1 }
);

__PACKAGE__->add_base_columns;

__PACKAGE__->set_primary_key("id");

__PACKAGE__->has_many(
  "attachments",
  "Schema::Result::Attachment",
  { "foreign.owner_id" => "self.id" },
);

__PACKAGE__->has_many(
  "employees",
  "Schema::Result::Contact",
  { "foreign.company_id" => "self.id"  },
);

__PACKAGE__->has_many(
  "tasks",
  "Schema::Result::Task",
  { "foreign.assigned_to" => "self.id" },
);

__PACKAGE__->might_have(
  "tasks_created",
  "Schema::Result::Task",
  { "foreign.assigned_by" => "self.id" },
);


## Force Array return

# Created by DBIx::Class::DB::Schema::Loader v0.04006 @ 2009-08-13 21:11:53
# DO NOT MODIFY THIS OR ANYTHING ABOVE! md5sum:obZUGgvkve3e6mzPk8GEEg
sub extra_columns {
    
    my $self = shift;

    return qw/first_name middle_name last_name suffix initials gender birthday anniversary location language internet_free_busy notes  email_2_address email_3_address home_phone home_phone_2 mobile_phone pager home_fax home_address home_street home_street_2 home_street_3 home_address_po_box home_city home_state home_postal_code home_country spouse children manager_name assistant_name referred_by company_main_phone business_phone business_phone_2 business_fax assistant_phone company job_title department office_location organizational_id_number profession account business_address business_street business_street_2 business_street_3 business_address_po_box  business_state business_postal_code business_country other_phone other_fax other_address other_street other_street_2 other_street_3 other_address_po_box other_city other_state other_postal_code other_country callback car_phone isdn radio_phone tty_phone telex user_1 user_2 user_3 user_4 keywords mileage hobby billing_information directory_server sensitivity priority private categories primary_photo/;
};

sub my_relations {

    my $self = shift;
	return qw//;
}

__PACKAGE__->meta->make_immutable(inline_constructor => 0);
1;
