FROM busybox:1.35.0-uclibc as busybox

FROM surrealdb/surrealdb:latest
COPY --from=busybox /bin/sh /bin/sh
COPY --from=busybox /bin/mkdir /bin/mkdir
COPY --from=busybox /bin/cat /bin/cat
COPY --from=busybox /bin/chmod /bin/chmod

ENTRYPOINT /surreal start -b 0.0.0.0:8080 --log debug --user $USER --pass $PASS file://data/srdb.db
