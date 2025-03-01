import{r as i,j as e,i as le,g as ce,a as me,o as ue,s as xe,c as he,b as ge,t as pe,d as fe,S as ye,e as O,R as q,u as G,L as F,f as H,T as K,I as be,C as _,h as J,k as je,l as W,P as ve,m as X,V as we,n as Y,p as Q,q as Ne,v as ke,w as Ce,x as Z,y as Se,z as Te,A as ee,B as Ee,D as Pe,E as De,F as R,N as B,G as ae,H as Fe}from"./vendor-CMjwvn2_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const A="https://todolist-ea782-default-rtdb.europe-west1.firebasedatabase.app",Re=async s=>{try{const r=await fetch(`${A}/tasks/${s}.json`);if(!r.ok)throw new Error("Error al obtener las tareas");return await r.json()}catch(r){throw console.error(r),r}},Le=async(s,r)=>{try{const a=await fetch(`${A}/tasks/${s}.json`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok)throw new Error("Error al crear la tarea");return await a.json()}catch(a){throw console.error(a),a}},z=async(s,r,a)=>{try{const n=await fetch(`${A}/tasks/${s}/${r}.json`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!n.ok)throw new Error("Error al actualizar la tarea");return await n.json()}catch(n){throw console.error(n),n}},Ae=async(s,r)=>{try{const a=await fetch(`${A}/tasks/${s}/${r}.json`,{method:"DELETE"});if(!a.ok)throw new Error("Error al eliminar la tarea");return await a.json()}catch(a){throw console.error(a),a}},re=i.createContext(void 0),I=()=>{const s=i.useContext(re);if(!s)throw new Error("useTasks debe usarse dentro de un TaskProvider");return s},Ie=({children:s})=>{const[r,a]=i.useState([]),[n,t]=i.useState(!1),[o,l]=i.useState(null),m=c=>{const u=c instanceof Error?c.message:"Error desconocido";throw l(u),setTimeout(()=>l(null),5e3),c},p=i.useCallback(async c=>{t(!0);try{const u=await Re(c);if(!u){a([]);return}const h=Object.entries(u).map(([f,b])=>{const N=b;return{id:f,name:N.name,priority:N.priority,date:N.date,status:N.status||"pendiente",createdAt:N.createdAt||new Date().toISOString()}});a(h.sort((f,b)=>new Date(b.createdAt).getTime()-new Date(f.createdAt).getTime()))}catch(u){m(u)}finally{t(!1)}},[]),d=async(c,u)=>{t(!0);try{const h={...u,status:"pendiente",createdAt:new Date().toISOString()};await Le(c,h),await p(c)}catch(h){m(h)}finally{t(!1)}},g=async(c,u,h)=>{t(!0);try{await z(c,u,h),a(f=>f.map(b=>b.id===u?{...b,...h}:b))}catch(f){m(f)}finally{t(!1)}},j=async(c,u)=>{t(!0);try{await Ae(c,u),a(h=>h.filter(f=>f.id!==u))}catch(h){m(h)}finally{t(!1)}},w=async(c,u)=>{t(!0);try{const h=r.find(b=>b.id===u);if(!h)return;const f=h.status==="pendiente"?"completada":"pendiente";await z(c,u,{status:f}),a(b=>b.map(N=>N.id===u?{...N,status:f}:N))}catch(h){m(h)}finally{t(!1)}};return e.jsx(re.Provider,{value:{tasks:r,getTasks:p,addTask:d,updateTask:g,deleteTask:j,toggleTaskStatus:w,loading:n,error:o},children:s})},Oe={apiKey:"AIzaSyAXnsApvupOjkt9NIuAGK250VMx3tPXm7Q",authDomain:"todolist-ea782.firebaseapp.com",projectId:"todolist-ea782",storageBucket:"todolist-ea782.appspot.com",messagingSenderId:"483761312981",appId:"1:483761312981:web:77e08fc131fb4740499b1e"},se=le(Oe),L=ce(se);me(se);const te=i.createContext(void 0),Be=({children:s})=>{const[r,a]=i.useState(null),[n,t]=i.useState(!0),[o,l]=i.useState(null);i.useEffect(()=>{const g=ue(L,j=>{a(j),t(!1)});return()=>g()},[]);const m=async(g,j)=>{l(null);try{const w=await he(L,g,j);a(w.user)}catch(w){let c="Error al registrar usuario";switch(w.code){case"auth/email-already-in-use":c="Este correo electrónico ya está registrado";break;case"auth/invalid-email":c="Correo electrónico inválido";break;case"auth/weak-password":c="La contraseña debe tener al menos 6 caracteres";break}throw l(c),new Error(c)}},p=async(g,j)=>{l(null);try{const w=await ge(L,g,j);a(w.user)}catch(w){let c="Error al iniciar sesión";switch(w.code){case"auth/invalid-email":c="Correo electrónico inválido";break;case"auth/user-disabled":c="Esta cuenta ha sido deshabilitada";break;case"auth/user-not-found":c="No existe una cuenta con este correo electrónico";break;case"auth/wrong-password":c="Contraseña incorrecta";break}throw l(c),new Error(c)}},d=async()=>{l(null);try{await xe(L),a(null)}catch{const j="Error al cerrar sesión";throw l(j),new Error(j)}};return e.jsx(te.Provider,{value:{user:r,loading:n,error:o,login:p,register:m,logout:d},children:!n&&s})},S=()=>{const s=i.useContext(te);if(s===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return s},$e=i.createContext(void 0);function Ve({children:s}){const[r,a]=i.useState("dark");i.useEffect(()=>{const t=window.document.documentElement;t.classList.remove("light","dark"),t.classList.add(r)},[r]);const n=()=>{a(t=>t==="light"?"dark":"light")};return e.jsx($e.Provider,{value:{theme:r,toggleTheme:n},children:s})}function x(...s){return pe(fe(s))}const T=i.forwardRef(({className:s,...r},a)=>e.jsx("div",{ref:a,className:x("rounded-xl border bg-card text-card-foreground shadow",s),...r}));T.displayName="Card";const E=i.forwardRef(({className:s,...r},a)=>e.jsx("div",{ref:a,className:x("flex flex-col space-y-1.5 p-6",s),...r}));E.displayName="CardHeader";const P=i.forwardRef(({className:s,...r},a)=>e.jsx("div",{ref:a,className:x("font-semibold leading-none tracking-tight",s),...r}));P.displayName="CardTitle";const ze=i.forwardRef(({className:s,...r},a)=>e.jsx("div",{ref:a,className:x("text-sm text-muted-foreground",s),...r}));ze.displayName="CardDescription";const D=i.forwardRef(({className:s,...r},a)=>e.jsx("div",{ref:a,className:x("p-6 pt-0",s),...r}));D.displayName="CardContent";const Me=i.forwardRef(({className:s,...r},a)=>e.jsx("div",{ref:a,className:x("flex items-center p-6 pt-0",s),...r}));Me.displayName="CardFooter";const v=i.forwardRef(({className:s,type:r,...a},n)=>e.jsx("input",{type:r,className:x("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:n,...a}));v.displayName="Input";const Ue=O("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),k=i.forwardRef(({className:s,variant:r,size:a,asChild:n=!1,...t},o)=>{const l=n?ye:"button";return e.jsx(l,{className:x(Ue({variant:r,size:a,className:s})),ref:o,...t})});k.displayName="Button";const qe=O("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),y=i.forwardRef(({className:s,...r},a)=>e.jsx(q,{ref:a,className:x(qe(),s),...r}));y.displayName=q.displayName;const Ge=()=>{const s=G(),{login:r,user:a,loading:n}=S(),[t,o]=i.useState({email:"",password:""}),[l,m]=i.useState(null);i.useEffect(()=>{a&&s("/")},[a,s]);const p=async d=>{d.preventDefault(),m(null);try{await r(t.email,t.password),s("/")}catch{m("Error al iniciar sesión. Por favor, inténtalo de nuevo.")}};return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-background p-4",children:e.jsxs(T,{className:"w-full max-w-md",children:[e.jsx(E,{className:"space-y-2 text-center",children:e.jsx(P,{className:"text-2xl font-bold",children:"Iniciar Sesión"})}),e.jsx(D,{children:e.jsxs("form",{onSubmit:p,className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(y,{htmlFor:"email",children:["Email ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(v,{id:"email",type:"email",value:t.email,onChange:d=>o({...t,email:d.target.value}),placeholder:"admin@admin.com",className:"focus-visible:ring-ring",required:!0,disabled:n})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(y,{htmlFor:"password",children:["Contraseña ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(v,{id:"password",type:"password",placeholder:"********",value:t.password,onChange:d=>o({...t,password:d.target.value}),className:"focus-visible:ring-ring",required:!0,disabled:n})]}),l&&e.jsx("div",{className:"text-sm text-destructive",role:"alert",children:l}),e.jsx(k,{type:"submit",className:"w-full",disabled:n,children:n?e.jsxs(e.Fragment,{children:[e.jsx(F,{className:"mr-2 h-4 w-4 animate-spin"}),"Iniciando sesión..."]}):"Iniciar Sesión"}),e.jsxs("div",{className:"space-y-4 text-center text-sm text-muted-foreground",children:[e.jsx("div",{children:e.jsx(H,{to:"/register",className:"text-primary hover:text-primary/90 transition-colors",children:"¿No tienes cuenta? Regístrate"})}),e.jsx("div",{children:e.jsx("a",{href:"#",className:"text-primary hover:text-primary/90 transition-colors",children:"¿Olvidaste tu contraseña?"})})]})]})})]})})},He=()=>{const s=G(),{register:r,loading:a,error:n}=S(),[t,o]=i.useState({email:"",password:"",confirmPassword:""}),[l,m]=i.useState(null),p=async d=>{if(d.preventDefault(),m(null),t.password!==t.confirmPassword){m("Las contraseñas no coinciden");return}try{await r(t.email,t.password),s("/")}catch{}};return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4",children:e.jsxs(T,{className:"w-full max-w-md dark:bg-gray-800 dark:border-gray-700 shadow-xl",children:[e.jsx(E,{className:"space-y-2 text-center",children:e.jsx(P,{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Crear Cuenta"})}),e.jsx(D,{children:e.jsxs("form",{onSubmit:p,className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(y,{htmlFor:"email",className:"text-gray-700 dark:text-gray-300",children:"Email"}),e.jsx(v,{id:"email",type:"email",placeholder:"admin@admin.com",value:t.email,onChange:d=>o({...t,email:d.target.value}),className:"dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500",required:!0,disabled:a})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(y,{htmlFor:"password",className:"text-gray-700 dark:text-gray-300",children:"Contraseña"}),e.jsx(v,{id:"password",type:"password",placeholder:"********",value:t.password,onChange:d=>o({...t,password:d.target.value}),className:"dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500",required:!0,disabled:a,minLength:6})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(y,{htmlFor:"confirmPassword",className:"text-gray-700 dark:text-gray-300",children:"Confirmar Contraseña"}),e.jsx(v,{id:"confirmPassword",type:"password",placeholder:"********",value:t.confirmPassword,onChange:d=>o({...t,confirmPassword:d.target.value}),className:"dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500",required:!0,disabled:a,minLength:6})]}),(n||l)&&e.jsx("div",{className:"text-sm text-red-600 dark:text-red-400",role:"alert",children:l||n}),e.jsx(k,{type:"submit",className:"w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors",disabled:a,children:a?e.jsxs(e.Fragment,{children:[e.jsx(F,{className:"mr-2 h-4 w-4 animate-spin"}),"Creando cuenta..."]}):"Crear Cuenta"}),e.jsxs("div",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:["¿Ya tienes una cuenta?"," ",e.jsx(H,{to:"/login",className:"text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",children:"Iniciar Sesión"})]})]})})]})})},ne=Se,oe=Te,$=i.forwardRef(({className:s,children:r,...a},n)=>e.jsxs(K,{ref:n,className:x("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",s),...a,children:[r,e.jsx(be,{asChild:!0,children:e.jsx(_,{className:"h-4 w-4 opacity-50"})})]}));$.displayName=K.displayName;const ie=i.forwardRef(({className:s,...r},a)=>e.jsx(J,{ref:a,className:x("flex cursor-default items-center justify-center py-1",s),...r,children:e.jsx(je,{className:"h-4 w-4"})}));ie.displayName=J.displayName;const de=i.forwardRef(({className:s,...r},a)=>e.jsx(W,{ref:a,className:x("flex cursor-default items-center justify-center py-1",s),...r,children:e.jsx(_,{className:"h-4 w-4"})}));de.displayName=W.displayName;const V=i.forwardRef(({className:s,children:r,position:a="popper",...n},t)=>e.jsx(ve,{children:e.jsxs(X,{ref:t,className:x("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",s),position:a,...n,children:[e.jsx(ie,{}),e.jsx(we,{className:x("p-1",a==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),e.jsx(de,{})]})}));V.displayName=X.displayName;const Ke=i.forwardRef(({className:s,...r},a)=>e.jsx(Y,{ref:a,className:x("px-2 py-1.5 text-sm font-semibold",s),...r}));Ke.displayName=Y.displayName;const C=i.forwardRef(({className:s,children:r,...a},n)=>e.jsxs(Q,{ref:n,className:x("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),...a,children:[e.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(Ne,{children:e.jsx(ke,{className:"h-4 w-4"})})}),e.jsx(Ce,{children:r})]}));C.displayName=Q.displayName;const _e=i.forwardRef(({className:s,...r},a)=>e.jsx(Z,{ref:a,className:x("-mx-1 my-1 h-px bg-muted",s),...r}));_e.displayName=Z.displayName;const Je=()=>{const{addTask:s,loading:r}=I(),{user:a}=S(),[n,t]=i.useState({name:"",priority:"media",date:new Date().toISOString().split("T")[0]}),o=async l=>{if(l.preventDefault(),!(!n.name.trim()||!a))try{await s(a.uid,n),t({name:"",priority:"media",date:new Date().toISOString().split("T")[0]})}catch(m){console.error(m)}};return e.jsxs("div",{className:"bg-card text-card-foreground rounded-lg p-6 mb-4 shadow-sm",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Nueva Tarea"}),e.jsxs("form",{onSubmit:o,className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(y,{htmlFor:"name",children:["Nombre de la tarea ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(v,{id:"name",value:n.name,onChange:l=>t({...n,name:l.target.value}),placeholder:"Ej: Preparar presentación",className:"focus-visible:ring-ring",disabled:r,required:!0})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(y,{htmlFor:"priority",children:["Prioridad ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsxs(ne,{value:n.priority,onValueChange:l=>t({...n,priority:l}),disabled:r,children:[e.jsx($,{className:"focus-visible:ring-ring",children:e.jsx(oe,{placeholder:"Selecciona prioridad"})}),e.jsxs(V,{children:[e.jsx(C,{value:"alta",className:"hover:bg-accent",children:"Alta"}),e.jsx(C,{value:"media",className:"hover:bg-accent",children:"Media"}),e.jsx(C,{value:"baja",className:"hover:bg-accent",children:"Baja"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(y,{htmlFor:"date",children:["Fecha límite ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(v,{type:"date",id:"date",value:n.date,onChange:l=>t({...n,date:l.target.value}),className:"focus-visible:ring-ring",disabled:r,required:!0,min:new Date().toISOString().split("T")[0]})]})]}),e.jsx(k,{type:"submit",className:"w-full",disabled:r||!n.name.trim(),children:r?e.jsxs(e.Fragment,{children:[e.jsx(F,{className:"mr-2 h-4 w-4 animate-spin"}),e.jsx("span",{children:"Creando..."})]}):"Crear Tarea"})]})]})},We=O("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function M({className:s,variant:r,...a}){return e.jsx("div",{className:x(We({variant:r}),s),...a})}const Xe=({task:s,onClose:r})=>{const{updateTask:a,loading:n}=I(),[t,o]=i.useState({name:s.name,priority:s.priority,date:s.date}),l=async m=>{if(m.preventDefault(),!!t.name.trim())try{await a("currentUserId",s.id,t),r()}catch(p){console.error(p)}};return e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 dark:text-gray-100",children:"Editar Tarea"}),e.jsxs("form",{onSubmit:l,className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(y,{className:"block text-sm font-medium dark:text-gray-300",children:"Nombre"}),e.jsx(v,{value:t.name,onChange:m=>o({...t,name:m.target.value}),className:"dark:bg-gray-700 dark:border-gray-600",disabled:n})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(y,{className:"block text-sm font-medium dark:text-gray-300",children:"Prioridad"}),e.jsxs(ne,{value:t.priority,onValueChange:m=>o({...t,priority:m}),disabled:n,children:[e.jsx($,{className:"dark:bg-gray-700 dark:border-gray-600",children:e.jsx(oe,{placeholder:"Selecciona prioridad"})}),e.jsxs(V,{className:"dark:bg-gray-700 dark:border-gray-600",children:[e.jsx(C,{value:"alta",className:"dark:hover:bg-gray-600",children:"Alta"}),e.jsx(C,{value:"media",className:"dark:hover:bg-gray-600",children:"Media"}),e.jsx(C,{value:"baja",className:"dark:hover:bg-gray-600",children:"Baja"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(y,{className:"block text-sm font-medium dark:text-gray-300",children:"Fecha"}),e.jsx(v,{type:"date",value:t.date,onChange:m=>o({...t,date:m.target.value}),className:"dark:bg-gray-700 dark:border-gray-600",disabled:n})]}),e.jsxs("div",{className:"flex justify-end gap-2 pt-2",children:[e.jsx(k,{type:"button",variant:"outline",onClick:r,disabled:n,className:"dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600",children:"Cancelar"}),e.jsx(k,{type:"submit",disabled:n||!t.name.trim(),className:"bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800",children:n?e.jsxs(e.Fragment,{children:[e.jsx(F,{className:"mr-2 h-4 w-4 animate-spin"}),"Guardando..."]}):"Guardar"})]})]})]})})},Ye=()=>{const{tasks:s,loading:r,error:a,deleteTask:n,toggleTaskStatus:t}=I(),{user:o}=S(),[l,m]=ee.useState(null),p=d=>{switch(d){case"alta":return"bg-destructive/20 text-destructive";case"media":return"bg-primary/20 text-primary";default:return"bg-secondary/20 text-secondary-foreground"}};return a?e.jsx("div",{className:"p-4 mb-4 text-sm text-destructive rounded-lg bg-destructive/10",role:"alert",children:a}):r&&s.length===0?e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx(F,{className:"h-8 w-8 animate-spin text-primary"})}):e.jsxs("div",{className:"space-y-6",children:[s.length===0?e.jsx("p",{className:"text-muted-foreground text-center py-8",children:"No hay tareas registradas"}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:s.map(d=>e.jsxs(T,{className:"border border-border hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-ring",children:[e.jsx(E,{className:"pb-2",children:e.jsxs("div",{className:"flex justify-between items-start gap-4",children:[e.jsx(P,{className:"text-lg font-semibold break-words",children:d.name}),e.jsx(M,{className:`${p(d.priority)} text-sm font-medium px-3 py-1`,role:"status","aria-label":`Prioridad: ${d.priority}`,children:d.priority})]})}),e.jsxs(D,{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-2",children:[e.jsx("span",{className:"text-sm text-muted-foreground",role:"time",children:new Date(d.date).toLocaleDateString()}),e.jsx(M,{variant:d.status==="completada"?"default":"outline",className:"cursor-pointer transition-colors duration-200 hover:bg-accent",onClick:()=>o&&t(o.uid,d.id),role:"switch","aria-checked":d.status==="completada",tabIndex:0,onKeyPress:g=>{(g.key==="Enter"||g.key===" ")&&o&&t(o.uid,d.id)},children:d.status})]}),e.jsxs("div",{className:"flex flex-wrap justify-between gap-3",children:[e.jsx(k,{variant:"outline",className:"flex-1 min-w-[120px]",onClick:()=>m(d.id),"aria-label":"Editar tarea",children:"Editar"}),e.jsx(k,{variant:"destructive",className:"flex-1 min-w-[120px]",onClick:()=>o&&n(o.uid,d.id),"aria-label":"Eliminar tarea",children:"Eliminar"})]})]})]},d.id))}),l&&e.jsx(Xe,{task:s.find(d=>d.id===l),onClose:()=>m(null)})]})},Qe=()=>{const{getTasks:s}=I(),{user:r,logout:a}=S();i.useEffect(()=>{r&&s(r.uid)},[r,s]);const n=async()=>{try{await a()}catch(t){console.error("Error al cerrar sesión:",t)}};return e.jsxs("div",{className:"container mx-auto p-4 max-w-6xl min-h-screen",children:[e.jsxs("header",{className:"mb-8",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800 dark:text-gray-100",children:"Gestor de Tareas"}),e.jsxs(k,{variant:"outline",className:"flex items-center gap-2",onClick:n,children:[e.jsx(Ee,{className:"h-4 w-4"}),"Cerrar Sesión"]})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mt-2",children:["Bienvenido, ",r==null?void 0:r.email]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsx("section",{"aria-labelledby":"nueva-tarea-title",children:e.jsxs(T,{className:"dark:bg-gray-800 dark:border-gray-700 shadow-lg transition-shadow hover:shadow-xl",children:[e.jsx(E,{className:"pb-4",children:e.jsx(P,{id:"nueva-tarea-title",className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Nueva Tarea"})}),e.jsx(D,{children:e.jsx(Je,{})})]})}),e.jsx("section",{"aria-labelledby":"mis-tareas-title",children:e.jsxs(T,{className:"dark:bg-gray-800 dark:border-gray-700 shadow-lg transition-shadow hover:shadow-xl",children:[e.jsx(E,{children:e.jsx(P,{id:"mis-tareas-title",className:"text-xl font-bold text-gray-800 dark:text-gray-100",children:"Mis Tareas"})}),e.jsx(D,{children:e.jsx(Ye,{})})]})})]}),e.jsx("footer",{className:"mt-12 text-center text-sm text-gray-600 dark:text-gray-400",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," Gestor de Tareas. Todos los derechos reservados."]})})]})},Ze=({children:s})=>{const{user:r,loading:a}=S(),n=ae();return a?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-background",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary"})}):r?e.jsx(e.Fragment,{children:s}):e.jsx(B,{to:"/login",state:{from:n},replace:!0})},U=({children:s})=>{var t,o;const{user:r,loading:a}=S(),n=ae();return a?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-background",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary"})}):r?e.jsx(B,{to:((o=(t=n.state)==null?void 0:t.from)==null?void 0:o.pathname)||"/",replace:!0}):e.jsx(e.Fragment,{children:s})},ea=()=>e.jsx("main",{className:"min-h-screen bg-background text-foreground",children:e.jsxs(De,{children:[e.jsx(R,{path:"/login",element:e.jsx(U,{children:e.jsx(Ge,{})})}),e.jsx(R,{path:"/register",element:e.jsx(U,{children:e.jsx(He,{})})}),e.jsx(R,{path:"/",element:e.jsx(Ze,{children:e.jsx(Qe,{})})}),e.jsx(R,{path:"*",element:e.jsx(B,{to:"/",replace:!0})})]})});function aa(){return e.jsx(Ve,{children:e.jsx(Pe,{children:e.jsx(Be,{children:e.jsx(Ie,{children:e.jsx("div",{className:"min-h-screen bg-background text-foreground",children:e.jsx(ea,{})})})})})})}Fe.createRoot(document.getElementById("root")).render(e.jsx(ee.StrictMode,{children:e.jsx(aa,{})}));
