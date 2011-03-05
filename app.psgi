use Dancer;

use Plack::Builder;
load_app 'App';

setting('skip_authentication', 0);

set plugins => {
    DBIC => {
        master => {
            dsn =>  "dbi:SQLite:dbname=var/master.db",
            schema_class => 'Master'
        },
		db => {
            dsn =>  "dbi:SQLite:dbname=var/small.db",
            schema_class => 'Schema'
        },
    },
	Email => {
        ssl => 1,
        driver => 'smtp',
        host => 'smtp.gmail.com',
        port => 465,
        user => 'harshal.shah@gmail.com',
        pass => '*****'
	}
    
};

setting("serializer", "JSON");

set session => 'PSGI';
set apphandler => 'PSGI';
set logger => 'file';

set access_log => 0;
set 'show_errors' => 1;

set 'log' => 'debug';

set 'traces' => 1;

set "template" => "simple";

my $app = sub {
    my $env = shift;
    my $request = Dancer::Request->new( $env );

   	Dancer->dance( $request );
};



builder {

	mount "/" => builder {
		enable 'Session', store => 'File';
		enable 'Debug' ,
			panels => [qw/Memory Response Timer Environment Dancer::Settings Dancer::Logger Parameters Dancer::Version Session DBIC::QueryLog/];
		enable "SimpleLogger";
		# enable ConsoleLogger;
		enable "Plack::Middleware::Static::Minifier",
          	   path => qr{^/?(images|javascript|css)/}, root => './public/';
 		#enable "Plack::Middleware::ServerStatus::Lite",
        #  	   path => '/status',
        #  	   allow => [ '127.0.0.1', '192.168.0.0/16' ],
        #  	   scoreboard => '/tmp';
		$app;
	},
}

