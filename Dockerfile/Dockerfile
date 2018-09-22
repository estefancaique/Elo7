FROM centos:7

MAINTAINER – Estefan Caique <estefancaique@gmail.com>

RUN yum update -y

RUN echo -e "[mongodb]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/7/mongodb-org/3.4/`uname -m`/\ngpgcheck=0\nenabled=1"\ > /etc/yum.repos.d/mongodb.repo && \
    yum install -y mongodb-org && \
    yum clean all && \
    chown -R mongod:mongod /var/lib/mongo

VOLUME ["/var/lib/mongodb"]

RUN yum install mongodb-org -y

CMD ["/usr/bin/mongod", "--config", "/etc/mongodb.conf"]

RUN yum -y install epel-release; yum clean all

RUN yum -y install nodejs git npm; yum clean all

RUN cd /opt/

CMD ["/usr/bin/git clone" "https://github.com/estefancaique/Elo7.git" /opt/Elo7]

CMD ["npm install /opt/Elo7/"]

CMD [node /opt/Elo7/app.js]

EXPOSE 5001
