<!-- Create Docker -->
docker login -u _json_key -p "$(cat gcs-service-account.json)" https://gcr.io
docker build -t  gajikuapp-com . && \
docker tag gajikuapp-com gcr.io/gajikuapp/frontend/gajikuapp-com && \
docker push gcr.io/gajikuapp/frontend/gajikuapp-com && \
docker image rm gcr.io/gajikuapp/frontend/gajikuapp-com gajikuapp-com

<!-- Build production in local -->
export NODE_ENV=production && npm run build && npm start
ssh -i ~/.ssh/az/gajiku-az-key.pem azureuser@10.224.0.6