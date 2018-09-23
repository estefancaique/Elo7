FROM centos:centos7

MAINTAINER Estefan Caique <estefancaique@gmail.com>

RUN yum update -y

RUN echo -e "[mongodb]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/7/mongodb-org/3.4/`uname -m`/\ngpgcheck=0\nenabled=1"\ > /etc/yum.repos.d/mongodb.repo && \
    yum install -y mongodb-org && \
    yum clean all && \
    chown -R mongod:mongod /var/lib/mongo
	
VOLUME ["/var/log/mongodb"]

EXPOSE 27017

RUN yum -y install epel-release; yum clean all

RUN yum -y install nodejs npm; yum clean all

RUN mkdir -p /opt/elo7/

COPY Elo7/ /opt/elo7/

RUN cd opt/elo7 && npm install

COPY mongostar.sh /

CMD "mongod --config /etc/mongod.conf"

CMD "cd opt/elo7 && node app.js"

EXPOSE 5001
