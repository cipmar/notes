aws cloudformation create-stack \
	--stack-name notes \
	--template-body file://template.yaml \
	--capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_IAM CAPABILITY_NAMED_IAM
