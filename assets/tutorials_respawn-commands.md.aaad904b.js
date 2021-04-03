import{r as n,o as a,c as s,b as t,w as o,d as p,a as e}from"./app.4a348b8b.js";const c='{"title":"Respawn Commands","description":"","frontmatter":{"layout":"page","title":"Respawn Commands","parent":"Tutorials"},"relativePath":"tutorials/respawn-commands.md","lastUpdated":1617465201087}',u={},r=t("h1",{id:"respawn-commands"},[t("a",{class:"header-anchor",href:"#respawn-commands","aria-hidden":"true"},"#"),p(" Respawn Commands")],-1),i=p("Intermediate"),l=e('<p>This animation controller can be used to run commands, such as re-adding potion effects or giving items when the player respawns.</p><p>Simply add the animation controller to the <code>player.json</code>, and</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;controller.animation.death&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;initialization&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;initialization&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              <span class="token property">&quot;has_died&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_alive&quot;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;on_exit&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&quot;variable.delay = 0.2 + query.life_time;&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;/&lt;death command or animation&gt;&quot;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;has_died&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;on_exit&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&quot;/&lt;Respawn command or animation&gt;&quot;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              <span class="token property">&quot;initialization&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_alive &amp;&amp; (query.life_time &gt;= variable.delay)&quot;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',3);u.render=function(p,e,c,u,k,q){const d=n("Label");return a(),s("div",null,[r,t(d,{color:"yellow"},{default:o((()=>[i])),_:1}),l])};export default u;export{c as __pageData};