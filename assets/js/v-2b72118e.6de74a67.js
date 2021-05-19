(self.webpackChunksite=self.webpackChunksite||[]).push([[903],{4810:(t,n,e)=>{"use strict";e.r(n),e.d(n,{data:()=>s});const s={key:"v-2b72118e",path:"/material/basic/sync.html",title:"物料数据托管",lang:"zh-CN",frontmatter:{title:"物料数据托管",order:7},excerpt:"",headers:[{level:2,title:"托管在 fusion.design",slug:"托管在-fusion-design",children:[]},{level:2,title:"托管到 unpkg",slug:"托管到-unpkg",children:[]}],filePathRelative:"material/basic/sync.md",git:{updatedTime:1621428598e3,contributors:[]}}},8974:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>h});var s=e(6252);const a=(0,s.uE)('<p>生成好的 <code>materials.json</code> 放在本地没有任何作用。如果需要在 iceworks 中使用这份物料，或者将物料放到物料站点推广，必须将物料数据进行发布托管。目前，我们支持两种托管方式，开发者可根据业务需要选择：</p><table><thead><tr><th>特性</th><th>fusion.design</th><th>unpkg</th></tr></thead><tbody><tr><td>官方推荐</td><td>是</td><td>一般</td></tr><tr><td>在 iceworks 中使用</td><td>能</td><td>能</td></tr><tr><td>需要登录注册帐号</td><td>需要</td><td>不需要</td></tr><tr><td>线上管理物料</td><td>能</td><td>不能</td></tr><tr><td>支持的物料体系</td><td>仅支持 React 物料</td><td>不限制</td></tr><tr><td>私有物料</td><td>不支持</td><td>支持</td></tr><tr><td>门户网站</td><td>能</td><td>不能</td></tr></tbody></table><h2 id="托管在-fusion-design"><a class="header-anchor" href="#托管在-fusion-design">#</a> 托管在 fusion.design</h2>',3),p=(0,s.Uk)("首先，在 "),d={href:"https://fusion.design/",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("fusion.design"),r=(0,s.Uk)(" 注册账号，注册完成后，进入个人中心，点击新增站点，根据页面提示输入站点信息。注意：阿里内部同学请使用 fusion 内部站点。"),o=(0,s.uE)('<p>创建完成后，可在个人中心看到自己的站点：</p><p><img src="https://img.alicdn.com/tfs/TB1xxKMcEWF3KVjSZPhXXXclXXa-2638-758.png" alt=""></p><p>在个人中心选择 token，token 是托管物料时用户鉴权的重要步骤，经过 token 校验成功，才能往你的站点存储物料。请小心保管，谨防泄漏。</p><p><img src="https://img.alicdn.com/tfs/TB1AYmMcwKG3KVjSZFLXXaMvXXa-2710-906.png" alt=""></p><p>复制 token，在终端执行 <code>iceworks sync</code>，第一次执行 sync 时根据提示填写 token 信息，然后选择需要发布物料的站点即可开始同步物料数据。当物料同步完成后，会获得物料源地址：</p><p><img src="https://img.alicdn.com/tfs/TB1TAGzbkxz61VjSZFrXXXeLFXa-1562-506.png" alt=""></p><h2 id="托管到-unpkg"><a class="header-anchor" href="#托管到-unpkg">#</a> 托管到 unpkg</h2>',7),c={href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Uk)("unpkg"),u=(0,s.Uk)(" 是 npm 的 CDN 托管服务，可通过 URL 获取 npm package 的内容。托管到 unpkg 本质上就是将 "),g=(0,s.Wm)("code",null,"material.json",-1),k=(0,s.Uk)(" 发布到 npm，这样，就能通过 unpkg 服务得到物料源的 URL 地址。"),m=(0,s.uE)('<p>然后进入物料仓库根目录，更新物料仓库 <code>package.json</code> 版本号，执行 <code>npm publish</code> 将物料数据发布到 npm，发布完成后，可根据以下规则拼接物料源地址：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://unpkg.com/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>packageName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">@latest/build/materials.json</span><span class="token template-punctuation string">`</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>不管是将物料数据托管到 fusign.design 还是 unpkg，本质上都是通过 HTTP GET 请求获取物料数据，因此，除了以上方式，你也可以将物料数据的 JSON 文件放到你的 CDN 或某个后端接口上使用。</p>',3),h={render:function(t,n){const e=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[a,(0,s.Wm)("p",null,[p,(0,s.Wm)("a",d,[i,(0,s.Wm)(e)]),r]),o,(0,s.Wm)("p",null,[(0,s.Wm)("a",c,[l,(0,s.Wm)(e)]),u,g,k]),m],64)}}}}]);