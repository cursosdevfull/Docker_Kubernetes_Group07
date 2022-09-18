FROM centos:7

ARG directory

RUN yum -y update && yum -y install httpd

COPY ${directory}/run.sh /run.sh

COPY ${directory}/src /var/www/html

CMD ["sh", "/run.sh"]