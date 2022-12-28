rm -rf ~/.ignite/relayer

ignite relayer configure -a \
 --source-rpc "http://0.0.0.0:26657" \
 --source-faucet "http://0.0.0.0:4500" \
 --source-port "blog" \
 --source-version "blog-1" \
 --source-prefix "cosmos" \
 --source-gasprice "0.0000025stake" \
 --source-gaslimit 300000 \
 --target-rpc "http://0.0.0.0:26659" \
 --target-faucet "http://0.0.0.0:4501" \
 --target-port "blog" \
 --target-version "blog-1" \
 --target-prefix "cosmos" \
 --target-gasprice "0.0000025stake" \
 --target-gaslimit 300000

ignite relayer connect

# channel-0 根据relayer生成时的提示来确定
# earth-mars:
  #    earth > (port: blog) (channel: channel-0)
  #    mars  > (port: blog) (channel: channel-1)

./cmd/planetd/planetd tx blog send-ibc-post blog channel-0 "Hello" "Hello Mars, I'm Alice from Earth" \
 --from alice \
 --chain-id earth \
 --home ./.data/earth


# 查询结果：在目标链mars上
 ./cmd/planetd/planetd q blog list-post --node tcp://localhost:26659

# 在源链earth上：
./cmd/planetd/planetd q blog list-sent-post