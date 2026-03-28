# ThinkFin Launch - Setup Checklist

## 🚨 CRITICAL: Complete These Steps Before Launch

### 1. Get Supabase Anon Key (5 minutes)

Your `.env.local` file needs the actual Supabase anon key.

**Steps:**
1. Go to: https://supabase.com/dashboard/project/yhlduhrqdgbtkerrgoer
2. Click **Settings** → **API**
3. Copy the **anon** **public** key (starts with `eyJ...`)
4. Open `.env.local` in this project
5. Replace `your_anon_key_here` with the actual key

**Current file location:** `/Users/devashish/Desktop/Thinkfin/Thinkfin landing/thinkfin-landing/.env.local`

### 2. Create Waitlist Table in Supabase (2 minutes)

**Steps:**
1. Go to Supabase → **SQL Editor**
2. Open `supabase-setup.sql` from this project
3. Copy entire contents
4. Paste in SQL Editor
5. Click **Run**
6. Verify: Go to **Table Editor** → should see **waitlist** table

### 3. Deploy to Vercel (10 minutes)

**Steps:**
1. Go to https://vercel.com/new
2. Import your GitHub repo: `devajais/thinkfin-landing`
3. In **Environment Variables**, add:
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://yhlduhrqdgbtkerrgoer.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = [paste your actual anon key]
   ```
4. Click **Deploy**
5. Wait 2-5 minutes for deployment

### 4. Configure Custom Domain (30 minutes - 48 hours for DNS)

**Steps:**
1. In Vercel project → **Settings** → **Domains**
2. Add domains:
   - `thinkfin.co`
   - `www.thinkfin.co`
3. Go to your domain registrar (where you bought thinkfin.co)
4. Add DNS records:

**A Record:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**CNAME Record:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

5. Wait for DNS propagation (1-48 hours, usually 1-2 hours)
6. Verify at https://dnschecker.org

### 5. Test Everything (5 minutes)

Once domain is live at https://thinkfin.co:

- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Waitlist form accepts email
- [ ] Success message shows after signup
- [ ] Check Supabase → waitlist table has the email
- [ ] Try signing up with same email → should show error
- [ ] Privacy Policy page loads
- [ ] Terms of Service page loads
- [ ] All pages work on mobile

## 📋 Quick Reference

**Supabase Project:**
- URL: https://yhlduhrqdgbtkerrgoer.supabase.co
- Dashboard: https://supabase.com/dashboard/project/yhlduhrqdgbtkerrgoer

**GitHub Repo:**
- https://github.com/devajais/thinkfin-landing

**Domain:**
- thinkfin.co (needs DNS configuration)

**Environment Variables Needed:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://yhlduhrqdgbtkerrgoer.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[get from Supabase dashboard]
```

## ⚠️ Important Notes

1. **`.env.local` is NOT committed to Git** - This is intentional for security
2. **Add environment variables in Vercel** - Required for production to work
3. **DNS takes time** - Domain might not work immediately (normal)
4. **HTTPS is automatic** - Vercel provides SSL certificate once DNS is configured

## 🆘 If Something Doesn't Work

**Waitlist form not submitting:**
- Check browser console (F12) for errors
- Verify environment variables are set in Vercel
- Check Supabase anon key is correct

**Domain not loading:**
- Wait longer (DNS propagation)
- Check DNS records are exactly correct
- Try incognito mode (clear cache)

**Build failing in Vercel:**
- Check build logs in Vercel dashboard
- Ensure environment variables are added
- Contact: devashishjaiswal84@gmail.com

## ✅ When Complete

You'll have:
- ✅ thinkfin.co live and working
- ✅ Waitlist collecting emails in database
- ✅ All legal pages accessible
- ✅ SEO-optimized and mobile-responsive
- ✅ Production-ready landing page!

---

**Need help?** See `DEPLOYMENT.md` for detailed step-by-step guide.
