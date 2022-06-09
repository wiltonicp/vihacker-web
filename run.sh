#!/usr/bin/env bash
yarn build
docker rmi registry.cn-shanghai.aliyuncs.com/vihacker/vihacker-cloud-web:1.0.7.R
docker build -t registry.cn-shanghai.aliyuncs.com/vihacker/vihacker-cloud-web:1.0.7.R .
