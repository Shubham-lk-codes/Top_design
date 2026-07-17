# TOP DESIGN - Vercel Deployment

## 🚀 Deploy in 30 Seconds

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
cd topdesign-vercel
vercel --prod
```

Or run the included script:
```bash
bash deploy.sh
```

---

## 📁 Files

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel configuration (routes, headers, caching) |
| `api/index.js` | Serverless API (contact form, blog, portfolio) |
| `public/index.html` | Complete website (HTML + CSS + JS inline) |
| `package.json` | Dependencies |
| `deploy.sh` | One-click deployment script |

---

## 🌐 Custom Domain

1. After deployment, go to Vercel Dashboard
2. Project → Settings → Domains
3. Add: `www.topdesign.co.in`
4. At your domain registrar, add CNAME:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 📞 Contact

- **Phone:** +91 92660 41927
- **Email:** info@topdesign.co.in
- **Address:** Dwarka, More, Delhi, India
