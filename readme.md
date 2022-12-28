# planet
**planet** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Ignite CLI has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/username/planet@latest! | sudo bash
```
`username/planet` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

1、添加IBC发送数据包和确认数据包的结构：
`ignite scaffold packet updatePost postID title content --ack postID --module blog`

2、在`proto/blog/packet.proto`目录下修改`UpdatePostPacketData`，添加创建人`string creator = 4`;， 执行命令`ignite chain build`重新编译proto文件。

3、修改生成的文件`update_post.go`中的方法`OnRecvUpdatePostPacket` 。其他的`OnRecvIbcPostPacket`/`OnTimeoutIbcPostPacket`实现，从ibc_post.go文件中拷贝过来即可。
```go
// 修改逻辑
	// 检查传过来的PostID是不是乱传的
	Id, err := strconv.ParseUint(data.PostID, 10, 64)
	if err != nil {
		return packetAck, errors.New("PostID is Error")
	}

	// 检查博文是否存在
	_, found := k.GetPost(ctx, Id)
	if !found {
		return packetAck, errors.New("Blog is not exit!")
	}

	// 更新博文
	k.SetPost(
		ctx,
		types.Post{
			Id:      Id,
			Creator: packet.SourcePort + "-" + packet.SourceChannel + "-" + data.Creator,
			Title:   data.Title,
			Content: data.Content,
		},
	)
```
4. 修改`msg_server_update_post.go`，在`SendUpdatePost`函数中添加：`packet.Creator = msg.Creator // 添加一个Creator`

5. `cd cmd/planetd/` 然后编译 `go build`，生成 planetd

6. 运行：`ignite chain serve -c mars.yml` 和 `ignite chain serve -c earth.yml`

7. 启动relayer，参见`start_relayer.sh`的步骤

8. 发起一个blog
```shell
./cmd/planetd/planetd tx blog send-ibc-post blog channel-0 "Hello" "Hello Mars, I'm Alice from Earth" \
 --from alice \
 --chain-id earth \
 --home ./.data/earth
```

9. 修改blog，把Blog id = 0 的记录的标题改一下, 这里的`channel-0`要填多少，根据relayer起来后的显示信息确认。
```shell
./cmd/planetd/planetd tx blog send-update-post blog channel-0 "0" "GoodBye" "GoodBye Mars, I'm Alice from Earth" \
 --from alice \
 --chain-id earth \
 --home ./.data/earth
```

10. 查看 ` ./cmd/planetd/planetd q blog list-post --node tcp://localhost:26659` 确认信息已经更改。


## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
