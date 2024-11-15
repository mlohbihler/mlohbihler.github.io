(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const g=t=>{const e=document.getElementById(t);if(!e)throw Error(`Required element with id '${t}' not found`);return e},E=(t,e,s={})=>{t.insertAdjacentHTML("beforeend",e);const n=t.lastChild;return Object.keys(s).forEach(a=>n.setAttribute(a,s[a])),n};window.onload=()=>{A()};const l=3,w=9;let v=[[" ","3"," ","2","6"," ","1"," "," "],[" ","6"," ","8"," "," ","3","2","4"],[" "," "," "," "," ","1"," "," "," "],[" "," ","1"," ","8"," "," ","9","2"],[" "," "," "," "," "," "," "," "," "],["4","9"," "," ","2"," ","5"," "," "],[" "," "," ","6"," "," "," "," "," "],["8","5","9"," "," ","2"," ","6"," "],[" "," ","7"," ","5","3"," ","8"," "]];const k=t=>{v=t,_((e,s)=>{g(L(e,s)).value=v[e][s]})},L=(t,e)=>`cell-${t}-${e}`,f=(t,e)=>`<input id="${L(t,e)}" type="text" />`,h=(t,e)=>`
    <td>
      <table>
        <tbody>
          <tr>
            <td>${f(t*3+0,e*3+0)}</td>
            <td>${f(t*3+0,e*3+1)}</td>
            <td>${f(t*3+0,e*3+2)}</td>
          </tr>
          <tr>
            <td>${f(t*3+1,e*3+0)}</td>
            <td>${f(t*3+1,e*3+1)}</td>
            <td>${f(t*3+1,e*3+2)}</td>
          </tr>
          <tr>
            <td>${f(t*3+2,e*3+0)}</td>
            <td>${f(t*3+2,e*3+1)}</td>
            <td>${f(t*3+2,e*3+2)}</td>
          </tr>
        </tbody>
      </table>
    </td>
  `,A=()=>{E(g("sudoku"),`
      <table>
        <tbody>
          <tr>
            ${h(0,0)}
            ${h(0,1)}
            ${h(0,2)}
          </tr>
          <tr>
            ${h(1,0)}
            ${h(1,1)}
            ${h(1,2)}
          </tr>
          <tr>
            ${h(2,0)}
            ${h(2,1)}
            ${h(2,2)}
          </tr>
        </tbody>
      </table>
    `);const t=g("sudoku-buttons");E(t,'<button type="button">Solve!</button>').addEventListener("click",F),E(t,'<button type="button">Clear</button>').addEventListener("click",M),E(t,'<button type="button">World&apos;s Hardest</button>').addEventListener("click",U),_((e,s)=>{const n=g(L(e,s));n.value=v[e][s],n.addEventListener("change",a=>B(a.target,e,s)),n.addEventListener("focus",a=>a.target.select())})},B=(t,e,s)=>{let n=t.value.trim();if(n.length>1&&(n=n.substring(n.length-1)),n===""||/^[ 1-9]$/.test(n)){const a=[];S(r=>a.push(v[r-1].slice())),a[e][s]=n,v=a}t.value=v[e][s],V()},F=()=>{const t=[];i(s=>{const n=[];t.push(n),i(a=>{const r=[];n.push(r);const o=parseInt(v[s][a],10);o>=1&&o<=9?r.push(o):S(c=>r.push(c))})});const e={data:t,changed:!1};try{x(e),z(e),D(e),T(e),x(e),z(e),D(e);const s=[];i(n=>{const a=[];i(r=>a.push(e.data[n][r][0].toString())),s.push(a)}),k(s),$(e)?N("Puzzle successfully solved"):N("Puzzle not solved")}catch(s){N("There was an error during solving. This could be due to an entry error, or, well, a bug. But be a sport and check what you entered."),console.log(s)}},M=()=>{const t=[];S(()=>{const e=[];t.push(e),S(()=>e.push(""))}),k(t),V()},U=()=>{k([["8"," "," "," "," "," "," "," "," "],[" "," ","3","6"," "," "," "," "," "],[" ","7"," "," ","9"," ","2"," "," "],[" ","5"," "," "," ","7"," "," "," "],[" "," "," "," ","4","5","7"," "," "],[" "," "," ","1"," "," "," ","3"," "],[" "," ","8","5"," "," "," ","1"," "],[" "," ","1"," "," "," "," ","6","8"],[" ","9"," "," "," "," ","4"," "," "]]),V()},V=()=>{g("sudoku-message-container").replaceChildren()},N=t=>{E(g("sudoku-message-container"),`<span id="sudoku-message">${t}</span>`)},S=t=>{d(1,10,t)},i=t=>{d(0,9,t)},d=(t,e,s)=>{for(let n=t;n<e;n++)s(n)},_=t=>{i(e=>i(s=>t(e,s)))},I=(t,e,s)=>{d(t,e,n=>d(t,e,a=>s(n,a)))},T=t=>{let e=!1;for(;e=C(t,m),$(t)||C(t,G)&&(e=!0),!($(t)||!e);)e=!1},C=(t,e)=>{let s=!1;for(t.changed=!1;e.forEach(n=>n(t)),!!t.changed;)s=!0,t.changed=!1;return s},u=(t,e,s)=>t.data[e][s].length===1,P=(t,e,s)=>t.data[e][s][0],$=t=>{for(let e=0;e<w;e++)for(let s=0;s<w;s++)if(!u(t,s,e))return!1;return!0},y=(t,e,s,n)=>{const a=t.data[e][s];n.forEach(r=>{let o=a.indexOf(r);o>=0&&(a.splice(o,1),t.changed=!0)})},O=(t,e,s,n)=>{if(t.data[e][s].indexOf(n)===-1)throw Error("Attempt to set cell to a value that has already been eliminated: cell:"+t.data[e][s]+", value="+n);t.data[e][s].length===1&&t.data[e][s][0]===n||(t.data[e][s]=[n],t.changed=!0)},j=t=>{I(0,l,(e,s)=>{const n=e*l,a=s*l,r=[];d(n,l+n,o=>{d(a,l+a,c=>{u(t,o,c)&&r.push(P(t,o,c))})}),d(n,l+n,o=>{d(a,l+a,c=>{u(t,o,c)||y(t,o,c,r)})})})},H=t=>{i(e=>{const s=[];i(n=>{u(t,n,e)&&s.push(P(t,n,e))}),i(n=>{u(t,n,e)||y(t,n,e,s)})})},R=t=>{i(e=>{const s=[];i(n=>{u(t,e,n)&&s.push(P(t,e,n))}),i(n=>{u(t,e,n)||y(t,e,n,s)})})},W=t=>{I(0,l,(s,n)=>{const a=s*l,r=n*l;S(o=>{let c=null;if(d(a,l+a,p=>{d(r,l+r,b=>{t.data[p][b].indexOf(o)!==-1&&(c==null?c=[p,b]:c=-1)})}),c===null)throw Error("No cell can take the value "+o+", box at "+a+","+r);c!==-1&&!u(t,c[0],c[1])&&O(t,c[0],c[1],o)})})},Z=t=>{_((e,s)=>{const n=s+1;let a=-1;if(i(r=>{t.data[r][e].indexOf(n)!==-1&&(a===-1?a=r:a=-2)}),a===-1)throw Error("No cell can take the value "+n+", row "+e);a>-1&&!u(t,a,e)&&O(t,a,e,n)})},K=t=>{_((e,s)=>{const n=s+1;let a=-1;if(i(r=>{t.data[e][r].indexOf(n)!==-1&&(a===-1?a=r:a=-2)}),a===-1)throw Error("No cell can take the value "+n+", column "+e);a>-1&&!u(t,e,a)&&O(t,e,a,n)})},X=t=>{try{_((e,s)=>{u(t,e,s)||t.data[e][s].slice().forEach(a=>{const r=[];i(p=>{const b=[];r.push(b),i(q=>b.push(t.data[p][q].slice()))});const o={data:r,changed:!1};O(o,e,s,a);let c=!1;try{T(o)}catch{if(y(t,e,s,[a]),c=!0,t.data[e][s].length===0)throw Error("No values remain at "+e+", "+s)}if(!c&&$(o))throw t.data=o.data,t.changed=o.changed,Error("solved")})})}catch(e){if(e.message!=="solved")throw e}},m=[j,R,H,W,Z,K],G=[X],x=t=>{I(0,l,(e,s)=>{const n=e*l,a=s*l,r=[];d(n,l+n,o=>{d(a,l+a,c=>{if(u(t,o,c)){const p=t.data[o][c][0];if(r.indexOf(p)!==-1)throw Error("Duplicate box value at x="+o+", y="+c);r.push(p)}})})})},z=t=>{i(e=>{const s=[];i(n=>{if(u(t,n,e)){const a=t.data[n][e][0];if(s.indexOf(a)!==-1)throw Error("Duplicate row value at x="+n+", y="+e);s.push(a)}})})},D=t=>{i(e=>{const s=[];i(n=>{if(u(t,e,n)){const a=t.data[e][n][0];if(s.indexOf(a)!==-1)throw Error("Duplicate column value at x="+e+", y="+n);s.push(a)}})})};
