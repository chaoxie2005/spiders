-- Active: 1752654868992@@127.0.0.1@3306
create table if not exists KS(
    id INTEGER PRIMARY KEY,
    liveDuration TEXT,
    liveCnt TEXT,
    playUv TEXT,
    maxConcurrentUv TEXT,
    likeUv TEXT,
    commentUv TEXT,
    receiveAmount TEXT,
    dateTime TEXT
);