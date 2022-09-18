FROM centos:7

RUN yum -y update && yum -y install httpd

COPY run.sh /run.sh

COPY src /var/www/html

CMD ["sh", "/run.sh"]