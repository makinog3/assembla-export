
      
      
      
      
      
      
      
      
      <h2><span style="background-color: rgb(255, 255, 255);"><span style="font-weight: normal;">This is the 12 step recipe for a manual installation of FileSender version 1.5+</span></span> <br></h2><ul><li>[[#Client and Server Requirements]]</li><li>[[#Step 1 - Install Apache2]]</li><li>[[#Step 2 - Configure Apache2 with SSL]]</li><li>[[#Step 3 - Install PHP5]]</li><li>[[#Step 4 - Install and configure PostgreSQL]]</li><li>[[#Step 5 - Install and configure SimpleSAMLphp]]</li><li>[[#Step 6 - Install the FileSender package]]</li><li>[[#Step 7 - Create the FileSender user and database]]</li><li>[[#Step 8 - Configure PHP5]]</li><li>[[#Step 9 - Configure your Apache virtual host]] <br></li><li>[[#Step 10 - Configure your FileSender installation]]</li><li>[[#Step 11 - Configure the FileSender clean-up cron job]]</li><li>[[#Step 12 - Start using FileSender]]</li><li>[[#Support and Feedback]]</li></ul><h2>Please help us with the FileSender one hour installation time guarantee</h2><p> We've all used more time than we wanted on a first time install of a piece of open source software, just to see whether it does something interesting.  We do not want FileSender to be like that.</p><p> </p><p>If you follow this documentation you should be up and running within an hour with a working FileSender installation that uses <a href="https://openidp.feide.no/">Feide RnD's OpenIdP</a> to authenticate users.  We assume:<br></p><ul><li>you install on Debian Linux or Ubuntu</li><li>you are a reasonably skilled sysadmin</li><li>you follow these installation instructions</li></ul><p><br></p><p><b>NOTE:</b> you'll spend even less time if you use the [[Installation_-_Debian_Ubuntu|Debian packags]] or the [[Installation_-_RPM|RPMs]].</p><p><br></p><p>If you you notice mistakes in this documentation, or if it took you more than an hour to install FileSender, please let us know on <a href="mailto:https://www.assembla.com/spaces/file_sender/wiki/Support_and_Mailinglists">filesender-dev@filesender.org</a> and help us improve the documentation for those that come after you!<br></p><p><br></p><h2>About this documentation<br></h2>
<p>This is the installation documentation for installing <b>FileSender 1.5(.x)</b>
 on Linux. This guide is written for installation from source on the 
Debian Linux platform but any Linux variant should work with some 
modifications (most notably about installing the required additional 
software packages).</p><p> </p><p><b>This documentation was tested with:</b></p><ul><li> standard debian 6.0.6 squeeze as released by Debian</li><li>PostgreSQL 8.4</li><li>Apache 2.2.16</li><li>PHP 5.3.3-7+squeeze14 with Suhosin-Patch</li><li>SimpleSAMLphp 1.10 <br></li></ul><p> </p><p><b>Debian and RPM packages</b> <br></p>
<p><i>Debian and RPM packages are also available to automate most of the
 steps below. Please see [[Installation - Debian Ubuntu]] and 
[[Installation - RPM]] for instructions on how to get and use them. The 
Debian and RPM packages will install the filesender and simplesamlphp 
software in the <span style="font-family: courier new,courier;">/usr/share/</span> directory tree. In the examples below<span style="font-family: courier new,courier;"> /usr/local/filesender</span> is used as base directory. Please adapt the examples below where appropriate when using the packages.</i></p>
<p> </p>
<h2>Client and Server Requirements</h2>
<p>See [[Requirements]].</p>
<h2>Step 1 - Install Apache2</h2>
<p>Install Apache2 from the Debian package repository:</p><pre style="max-width: 893px;"><span style="font-family: courier new,courier;"><span><span>    </span></span>apt-get install apache2</span>
</pre><h2>Step 2 - Configure Apache2 with SSL</h2><p>The default FileSender configuration is for an installation that only works over SSL.  Make your Apache SSL-enabled with the following commands:</p><pre style="max-width: 893px;"><span>    </span>a2ensite default-ssl<br><span>    </span>a2enmod ssl<br><span>    </span>service apache2 reload</pre><p>This will give you a working SSL-enabled Apache server with a self-signed SSL-certificate, allowing you to verify your FileSender installation works with HTML5 compatible browsers.  <span style="color: rgb(255, 0, 0);">Uploads in older browsers use a Flash component.  They will not work until you install an SSL certificate issued by a CA recognised by popular browsers.<font color="#000000">  This is a Flash specific issue explained in more detail in the<font color="#000000"> </font></font></span>[[FAQ#Q2|FAQ entry on SSL certificates and Flash]]<br></p><p> </p><p>If you want to test Flash uploads by running FileSender over HTTP-only, change <i>$config['forceSSL']</i> in config.php to false.  This will constitute a security risk.  <span style="font-family: courier new,courier;"><span style="font-family: arial,helvetica,sans-serif;"><span style="background-color: rgb(255, 255, 255);"><span style="color: rgb(255, 0, 0);">Disabling
 SSL means all file uploads and downloads are unprotected and any data 
transferred to and from your FileSender installation can be stolen.</span> </span> 
Disabling SSL is not advisable.</span></span></p><h2>Step 3 - Install PHP5</h2><p>Install PHP5 from the Debian package repository: </p><pre style="max-width: 893px;">apt-get install php5 libapache2-mod-php5 <br></pre><h2>Step 4 - Install and configure PostgreSQL</h2>
<p><i>Note: FileSender also supports MySQL.  If you prefer to use MySQL for FileSender, please refer to the MySQL installation manual for your version of MySQL.  If you would like to see detailed instructions for how to install MySQL for use with FileSender, please consider contributing documentation.<br></i></p><p><br></p><p><b>Step 4a - Install PostgreSQL and the PostgreSQL module for PHP:</b></p><pre style="max-width: 893px;">apt-get install postgresql php5-pgsql</pre><b>Step 4b - Verify the PostgreSQL configuration</b><br><p>FileSender uses password based database logins and by default assumes
 that PostgreSQL is configured to accept password based sessions on 
'localhost'. You should check and when needed change the relevant 
settings in the PostgreSQL pg_hba.conf configuration file. This file 
should have the following entries with <b>md5</b> listed as METHOD for local IPv4 and IPv6 connections:</p>
<pre style="max-width: 893px;"># Database administrative login by UNIX sockets<br>local   all         postgres                          ident<br># TYPE  DATABASE    USER        CIDR-ADDRESS          METHOD<br># "local" is for Unix domain socket connections only<br>local   all         all                               ident<br># IPv4 local connections:<br>host    all         all         127.0.0.1/32          <b>md5</b><br># IPv6 local connections:<br>host    all         all         ::1/128               <b>md5</b></pre>
<p>On Debian based systems this file will be in <span style="font-family: courier new,courier;">/etc/postgresql/<version>/main/pg_hba.conf </span>. On Red Hat/Fedora based systems this file will be in <span style="font-family: courier new,courier;">/var/lib/pgsql/data/pg_hba.conf</span>
 . When changing the pg_hba.conf file you'll have to restart the 
database server with (version number may be different or not needed 
depending on your system):</p><pre style="max-width: 893px;">service postgresql-8.4 reload</pre><h2>Step 5 - Install and configure SimpleSAMLphp</h2>
<p>SimpleSAMLphp helps you use nearly any authentication mechanism you can imagine.  Following these instructions will set you up with a SimpleSAMLphp installation that uses Feide RnD's OpenIdP to authenticate users.  When you move to a production service you probably want to change that to only support authentication sources of your choice.</p><p>  </p><ul><li><b><a href="http://simplesamlphp.googlecode.com/files/simplesamlphp-1.10.0.tar.gz">Step 5a: Download SimpleSAMLphp 1.10.0</a>. </b> Other  <a href="http://code.google.com/p/simplesamlphp/downloads/list">(later or older) versions</a> will probably work but we tested with version 1.10.0.</li></ul><pre style="max-width: 893px;">cd /root<br>mkdir downloads<br>cd downloads<br>wget http://simplesamlphp.googlecode.com/files/simplesamlphp-1.10.0.tar.gz<b><br></b></pre><p><b>NOTE: </b>you will of course remember to check <a href="http://code.google.com/p/simplesamlphp/downloads/detail?name=simplesamlphp-1.10.0.tar.gz&can=2&q=">the sha1 hash of the tar file</a>, right?</p><p> <br></p><ul><li><b>Step 5b - Extract it in a suitable directory and create symlink:</b></li></ul><p> </p><p><span style="color: rgb(255, 0, 0);"><b>SECURITY NOTE:</b></span> we only want <i>the user interface files</i> to be directly accessible for the world through the web server, not any of the other files.  We will not extract the SimpleSAMLphp package in the /var/www directory (the standard Apache document root) but rather in a specific /usr/local tree.  We'll point to the SimpleSAML webroot with a web server alias<br></p><pre style="max-width: 893px;">mkdir /usr/local/filesender/<br>cd /usr/local/filesender<br>tar xvzf /root/downloads/simplesamlphp-1.10.0.tar.gz<br>ln -s simplesamlphp-1.10.0 simplesaml<br></pre><ul><li><b>Step 5c - Copy standard configuration files to the right places:</b></li></ul><pre style="max-width: 893px;"><i>cd /usr/local/filesender/simplesaml<br></i><i>cp -r config-templates/*.php config/<br></i><i>cp -r metadata-templates/*.php metadata/</i></pre><p></p><p></p><p></p><p>To tailor your <a href="http://simplesamlphp.org/">SimpleSAMLph</a>p installation to match your local site's needs please check its<a href="http://simplesamlphp.org/docs"> installation and configuration documentation</a>.  When connecting to an Identity provider make sure all the required 
attributes are sent by the identity provider. See the 
[[Administrator_reference_manual#idp_attributes|section on IdP 
attributes]] in the Reference Manual for details.<br></p><h2>Step 6 - Install the FileSender package</h2>
<ul><li><b>Step 6a: Download the FileSender software</b> and compare the hash with the one published on the FileSender 1.5 [[Download|download page]].<br></li></ul> <pre style="max-width: 893px;">cd /root/downloads<br>wget http://download.filesender.org/filesender-1.5.tar.gz<br>openssl dgst -sha1 filesender-1.5.tar.gz  <br></pre><p>Verify the hash digest with the one on the <a href="https://www.assembla.com/spaces/file_sender/wiki/Download">FileSender download page for your release</a><br></p><p> <br></p><ul><li><b>Step 6b - Extract the FileSender tarbal</b></li></ul><span style="color: rgb(255, 0, 0);"><b>SECURITY NOTE:</b></span> we 
only want the <i>user interface files</i> to be directly accessible for the 
world through the web server, not any of the other files.  We will not 
extract the FileSender package in the /var/www directory (the 
standard Apache document root) but rather in a specific /usr/local 
tree.  We'll point to the FileSender webroot with a web server alias 
<pre style="padding-left: 60px; max-width: 893px;"><span style="font-family: courier new,courier;">cd /usr/local/filesender<br>tar xvzf </span><span style="font-family: courier new,courier;"><span style="font-family: courier new,courier;">/root/downloads/filesender-1.5.tar.gz<br></span></span><span style="font-family: courier new,courier;">ln -s </span><span style="font-family: courier new,courier;"><span style="font-family: courier new,courier;"><span style="font-family: courier new,courier;">filesender-1.5 filesender</span></span></span> <br></pre><p style="padding-left: 60px;">This will create a directory '<span style="font-family: courier new,courier;">filesender-1.5</span>' with a symlink 'filesender' pointing to it.  Using the symlink makes upgrading easier. <br></p><p> </p><p>
</p><ul><li><b>Step 6c - initialise config file and set permissions right. </b>Make the files, tmp and log directories writable by the web daemon 
user (www-data), copy the config file in place from the template and allow the web deamon user to read the config.php configuration 
file:</li></ul>
<pre style="padding-left: 60px; max-width: 893px;">cd /usr/local/filesender/filesender<br>cp config/config-dist.php config/config.php<br>chown www-data:www-data tmp files log<br>chmod o-rwx tmp files log<br>chgrp www-data config/config.php</pre>
<p style="padding-left: 60px;"><b>NOTE:</b> we ship the FileSender tarball with config-dist rather than config.php to make life easier when building Debian packages and RPMs.  <br></p><p style="padding-left: 60px;"> </p><ul><li>The directory structure and permissions should now be as follows, carefully check the entries marked in <b>bold</b>:</li></ul><pre style="padding-left: 60px; max-width: 893px;">root@filesender:/usr/local/filesender/filesender# ls -l config/<br>total 96<br>-rw-r----- 1 root root     15122 Aug 27 11:46 config-dist.php<br><b>-rw-r----- 1 root www-data 15447 Jan 11 13:16 config.php<br><br></b><br>root@filesender:/usr/local/filesender/filesender# ls -la<br>total 44<br>drwxr-xr-x 14 root     root      1024 Nov 14 16:04 .<br>drwxr-xr-x 11 root     root      3072 Jan 28 21:43 ..<br>-rw-r--r--  1 root     root     18368 Oct 22 09:26 CHANGELOG.txt<br>drwxr-xr-x  2 root     root      1024 Oct 22 09:38 classes<br>drwxr-xr-x  2 root     root      1024 Jan 16 13:19 config<br>drwxr-xr-x  2 root     root      1024 Oct 22 09:38 config-templates<br>drwxr-xr-x  2 root     root      1024 Oct 22 09:38 cron<br><b>drwxr-x---  2 www-data www-data  1024 Oct 22 09:38 files</b><br>drwxr-xr-x  2 root     root      1024 Oct 22 09:38 includes<br>-rw-r--r--  1 root     root      3551 Mar 18  2012 INSTALL.txt<br>drwxr-xr-x  2 root     root      1024 Oct 22 09:38 language<br>-rw-r--r--  1 root     root      1657 Dec 30  2011 LICENCE.txt<br><b>drwxr-x---  2 www-data www-data  1024 Oct 22 09:38 log</b><br>drwxr-xr-x  2 root     root      1024 Nov  9 15:40 pages<br>-rw-r--r--  1 root     root      2381 Jul  3  2011 README.txt<br>drwxr-xr-x  2 root     root      1024 Oct 22 09:38 scripts<br><b>drwxr-x---  2 www-data www-data  1024 Oct 22 09:38 tmp</b><br>drwxr-xr-x  7 root     root      1024 Dec  3 13:00 www<br><br><br></pre><br><p> </p>
<h2>Step 7 - Create the FileSender user and database</h2>
<ul><li><b>Step 7a -</b> Create the PostgreSQL user and database to be used by FileSender <br></li></ul><p><br></p>
<p>Create the database user <span style="font-family: courier new,courier;">filesender</span>
 without special privileges and with a password. The command will prompt
 you to specify and confirm a password for the new database user.  <i>This is the 
password you need to configure in the FileSender configuration file lateron.</i></p>
<pre style="max-width: 893px;">$ sudo -u postgres createuser -S -D -R -P filesender<br>Enter password for new role: <b><secret></b><br>Enter it again: <b><secret></b></pre>
<p>This will create a database user <b>filesender</b> without special privileges, and with a password.  This password you will have to configure in the filesender config.php lateron.</p><p> </p><p><b>NOTE: FileSender also supports MySQL.</b>  Please consult the MySQL manuals on how to create a MySQL database user.  Please help us improve the documentation and send us the MySQL equivalent of this PostgreSQL instruction<br></p><p> </p><ul><li><b>Step 7b -</b> Create the filesender database with UTF8 encoding owned by the newly created filesender user:</li></ul>
<pre style="max-width: 893px;">$ sudo -u postgres createdb -E UTF8 -O filesender filesender<br>$ psql -h localhost filesender filesender < /usr/local/filesender/filesender/scripts/filesender_db.sql<br>Password for user filesender: <b><secret></b><br>NOTICE:  CREATE TABLE will create implicit sequence "files_fileid_seq" for serial column "files.fileid"<br>NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "files_pkey" for table "files"<br>CREATE TABLE<br>CREATE SEQUENCE<br>NOTICE:  CREATE TABLE / PRIMARY KEY will create implicit index "logs_pkey" for table "logs"<br>CREATE TABLE</pre>
<p><b>NOTE:</b> when using MySQL the database initialisation script is in scripts/mysql_filesender_db.sql</p><h2>Step 8 - Configure PHP5</h2><p><b>NOTE:</b> a sample settings file is provided with FileSender in <span style="font-family: courier new,courier;">config-templates/filesender-php.ini</span>. If you don't feel like manually editing your php.ini file, this file can be stored in your <span style="font-family: courier new,courier;">/etc/php.d/</span> or <span style="font-family: courier new,courier;">/etc/php5/conf.d/</span>
 directory to activate those settings.  Please adapt the sample settings
 file where needed. </p><h4><span style="font-weight: normal;">For manual edits, edit /etc/php5/apache2/php.ini and execute the following changes: <br></span></h4><p><b>Step 8a: to allow for max. 2 GB Flash uploads</b> change these settings to the values indicated:<span></span><br></p><pre style="max-width: 893px;"><span>    </span>max_input_time = 3600 ; in seconds<br><span>    </span>upload_max_filesize = 2047M ; in M, the default value is 2MB<br><span>    </span>post_max_size = 2146446312 ; in M, 2047M + 10K<span></span><br></pre><p><b>NOTE</b>: when you edit your FileSender config.php remember to change $config['max_flash_upload_size'] to match your upload_max_filesize.  If they are not the same FileSender will use the lowest value as the actual maximum upload size for Flash uploads.</p><p><b> </b></p><p><b>Step 8b - ensure the php temporary upload directory points to a location with enough space: </b></p><pre style="max-width: 893px;"><span>    </span>upload_tmp_dir = <i>/your/temporarylocation </i><br></pre><p><b>NOTE:</b> You probably want to point this to the same directory you will use as your HTML5 upload temp directory ($config['site_temp_filestore'].<br><b>NOTE: </b>that this setting is for all PHP-apps, not only for filesender.</p><p><b> <br></b></p><p><b>Step 8c - Turn on logging:</b></p><pre style="max-width: 893px;"><span>    </span>log_errors = <b>on</b> <br><span>    </span>error_log =<b> syslog</b><span><br></span></pre><p><span><b>Step 8d - enable secure cookie handling to protect sessions<br></b></span></p><pre style="max-width: 893px;"><span><span>    </span>session.cookie_secure = On<br><span>    </span>session.cookie_httponly = On<br></span></pre><p><span><b>Step 8e -  Reload your Apache server to activate the changes to your php.ini:</b>   </span><br></p><pre style="max-width: 893px;"><span>    </span>service apache2 reload</pre>
<h2>Step 9 - Configure your Apache virtual host</h2><p><span style="font-weight: normal;"><b> </b></span></p><p><span style="font-weight: normal;"><b>Step 9a:</b> make sure all traffic to http is redirected to https, to make things easy for your users<br></span></p><p><span style="font-weight: normal;"> </span></p><p><span style="font-weight: normal;">edit </span><span style="font-weight: normal;"><b>/etc/apache2/sites-enabled/000-default</b> and add this line to the virtual host definition:</span></p><pre style="max-width: 893px;"><VirtualHost *:80>    <span><br><span>    </span>...<br><br>    </span>Redirect / https://<your filesender site><br><br><span>    </span>...<br></VirtualHost> <br></pre><p><b> </b></p><p><b>Step 9b: create the URL aliases to your simplesamlphp and your FileSender web trees.</b>  This will make them accessible through your web server.</p><p> </p><p> edit  <b>/etc/apache2/sites-enabled/default-ssl</b> and add these lines to the virtual host definition:<br></p><pre style="max-width: 893px;"><VirtualHost _default_:443><br><br>...<br><br><span>    </span>Alias /simplesaml /usr/local/filesender/simplesaml/www<br><span><span><span>    </span></span></span><Directory "/usr/local/filesender/simplesaml/www"><br><span>    </span><span>    </span>AllowOverride None<br><span>   <span>    </span> </span>Order deny,allow    <br><span>   <span>    </span> </span>Allow from all<br><span>    </span></Directory><br><br><span>    </span>Alias /filesender /usr/local/filesender/filesender/www<br><span>    </span><Directory "/usr/local/filesender/filesender/www"><br><span><span>    </span>    </span>Options FollowSymLinks<br><span><span>    </span>    </span>DirectoryIndex index.php<br><span><span>    </span>    </span>AllowOverride None<br><span><span>    </span>    </span>Order deny,allow<br><span><span>    </span>    </span>Allow from all<br><span>    </span></Directory><br><br>...<br><br></VirtualHost><br><br></pre><h2> </h2><p><span><b>Step 9c -  Reload your Apache server to activate the changes to the Apache config:</b>   </span><br></p><pre style="max-width: 893px;"><span>    </span>service apache2 reload</pre><h2>Step 10 - Configure your FileSender installation
</h2><p>Edit your newly created config.php:</p><p><span>    </span><b><span>    </span>/usr/local/filesender/filesender/config/config.php</b></p><p><b> </b></p>Carefully check and adapt the following settings. The<b> minimum required changes</b> to config.php are marked in <b>bold</b>:
<pre style="padding-left: 30px; max-width: 893px;">$config['admin'] = '';<br>$config['adminEmail'] = '<b>Your.Address@example.org</b>';<br>$config['Default_TimeZone'] = '<b>Europe/Berlin</b>';<br>$config['site_defaultlanguage'] = 'en_AU'; // for available languages see the ./language directory<br>$config['site_name'] = '<b><my site> FileSender</b>'; // Friendly name used for your FileSender instance<br><br><br>$config['site_url'] = $prot . $_SERVER['SERVER_NAME'] . '/filesender/'; // URL to Filesender<br>$config['site_simplesamlurl'] =  $prot . $_SERVER['SERVER_NAME'] . '/simplesaml/';<br><br>$config['forceSSL'] = true;<br><br><br>$config['site_filestore'] = '<b>/usr/local/filesender/filesender/files/</b>'; <br>$config['site_temp_filestore'] = '<b>/usr/local/filesender/filesender/tmp/</b>'; <br>$config['site_simplesamllocation'] = '<b>/usr/local/filesender/simplesaml</b>/';<br>$config['log_location'] = '<b>/usr/local/filesender/filesender/log/</b>'; <br><br><br>$config["db_type"] = "pgsql";// pgsql or mysql<br>$config['pg_host'] = 'localhost'; // postgres database host<br>$config['pg_database'] = 'filesender';   // name of database on postgres<br>$config['pg_port'] = '5432'; // default port<br>$config['pg_username'] = 'filesender'; // username to connect to postgress database <br>$config['pg_password'] = '<b><secret></b>';  // password to connect to postgress database</pre>
<p>Detailed information about the configuration settings of FileSender can be found in the [[Administrator reference manual]]</p><br><h2>Step 11 - Configure the FileSender clean-up cron job</h2>
<p>Schedule the FileSender clean-up cron job to run once a day:</p><pre style="max-width: 893px;">echo "#!/bin/sh<br>>    php -q /usr/local/filesender/filesender/cron/cron.php" > /etc/cron.daily/filesender<br></pre><p>Filesender uses a cron job to remove files that have expired, close any vouchers that have expired and remove any stale entries of cancelled uploads from the database.  Typically
 you would run the cron job every night at a set time. </p><p><b> </b></p><p><b>NOTE:</b> the 
Debian and RPM packages will install the required cronjob for you.</p><p><b>NOTE:</b> although the cronjob is responsible for the <i>actual removal </i>of expired or deleted files, any files deleted by a user through MyFiles will be no longer be available for download.</p><p> <br></p><h2>Step 12 - Start using FileSender</h2>
<p style="padding-left: 30px;"> </p><p style="padding-left: 30px;"><b>https://<your site>/filesender/</b></p>
<p><span style="font-weight: normal;"><b> </b></span></p><span style="font-weight: normal;"><b>NOTE:</b> If you want your site to be available on https://<your site>/, without the /filesender, point your <b>Apache DocumentRoot </b>to /usr/local/filesender/filesender/www and remember to update your </span><b>$config['site_url'] accordingly</b><br><h2>Support and Feedback</h2>
<p>See [[Support and Mailinglists]] and [[Feature requests]].</p>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    