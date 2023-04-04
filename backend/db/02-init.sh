#!/bin/bash
echo "########### Loading data to Mongo DB ###########"
curl https://s3.amazonaws.com/roxiler.com/product_transaction.json | mongoimport --type=json --db getdb --collection transactions --jsonArray