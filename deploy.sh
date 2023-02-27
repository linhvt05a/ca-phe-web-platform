
echo "-- Install --"
# Install dependencies
yarn --production

echo "-- Build --"
# Build
yarn build

echo "-- Deploy --"
# Sync build with our S3 bucket
aws s3 sync build s3://it-job.com
# Invalidate cache
aws cloudfront create-invalidation --distribution-id EKAXH4WV6TQZB --paths "/*" --no-cli-pager
echo "-- Deploy Success ! --"