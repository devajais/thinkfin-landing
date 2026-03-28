# ThinkFin Landing Page - Deployment Guide

## Prerequisites

1. **Supabase Account** - Database setup
2. **Vercel Account** (recommended) or similar Next.js hosting
3. **Custom Domain** - thinkfin.co (already purchased)

## Step 1: Supabase Database Setup

### 1.1 Get Your Supabase Credentials

1. Go to your Supabase project: https://supabase.com/dashboard
2. Navigate to **Settings** → **API**
3. Copy the following values:
   - **Project URL** (NEXT_PUBLIC_SUPABASE_URL)
   - **anon public key** (NEXT_PUBLIC_SUPABASE_ANON_KEY)

### 1.2 Create the Waitlist Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy and paste the entire contents of `supabase-setup.sql`
3. Click **Run** to execute the SQL
4. Verify the table was created in **Table Editor** → **waitlist**

### 1.3 Update Environment Variables

1. Edit `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://yhlduhrqdgbtkerrgoer.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key_here
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@db.yhlduhrqdgbtkerrgoer.supabase.co:5432/postgres
```

2. Replace `your_actual_anon_key_here` with your actual anon key from Supabase
3. Replace `YOUR_PASSWORD` with your actual database password

**Important:** Never commit `.env.local` to Git. It's already in `.gitignore`.

## Step 2: Deploy to Vercel

### 2.1 Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

### 2.2 Deploy via Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/new)
2. Click **Import Project**
3. Connect your GitHub repository
4. Select the `thinkfin-landing` repository
5. Configure project:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

### 2.3 Add Environment Variables in Vercel

In Vercel Project Settings → Environment Variables, add:

```
NEXT_PUBLIC_SUPABASE_URL = https://yhlduhrqdgbtkerrgoer.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your_actual_anon_key_here
```

**Important:** Add these to all environments (Production, Preview, Development)

### 2.4 Deploy

1. Click **Deploy**
2. Wait for build to complete (2-5 minutes)
3. Vercel will provide a URL like `thinkfin-landing.vercel.app`

## Step 3: Configure Custom Domain (thinkfin.co)

### 3.1 Add Domain in Vercel

1. Go to your Vercel project → **Settings** → **Domains**
2. Click **Add Domain**
3. Enter `thinkfin.co`
4. Also add `www.thinkfin.co` (will redirect to main domain)

### 3.2 Update DNS Records

Go to your domain registrar (where you bought thinkfin.co) and add these DNS records:

**For root domain (thinkfin.co):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**DNS Propagation:** Can take 24-48 hours, but usually completes within 1-2 hours.

### 3.3 Verify Domain

1. In Vercel, click **Verify** next to your domain
2. Once verified, Vercel will automatically provision SSL certificate
3. Your site will be live at https://thinkfin.co

## Step 4: Test Waitlist Functionality

### 4.1 Test Signup

1. Go to https://thinkfin.co
2. Scroll to "Join Waitlist" section
3. Enter a test email
4. Click "Join Waitlist"
5. You should see success message

### 4.2 Verify in Supabase

1. Go to Supabase → **Table Editor** → **waitlist**
2. You should see your test email in the table
3. Check `created_at` timestamp

### 4.3 Test Error Cases

- Try signing up with same email twice → Should show "already on waitlist" error
- Try invalid email → Should show validation error

## Step 5: Monitor and Analytics (Optional)

### 5.1 Vercel Analytics

- Automatically enabled for all Vercel deployments
- View in Vercel Dashboard → **Analytics**

### 5.2 Google Analytics (Optional)

1. Create Google Analytics 4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `src/app/layout.tsx`:

```typescript
<Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## Step 6: Email Export for Waitlist

### 6.1 Manual Export from Supabase

1. Go to Supabase → **Table Editor** → **waitlist**
2. Click **Export** button
3. Download as CSV

### 6.2 SQL Query for Email List

Run this in SQL Editor to get all emails:

```sql
SELECT email, created_at
FROM waitlist
ORDER BY created_at DESC;
```

### 6.3 Automated Email Marketing (Future)

Consider integrating with:
- Mailchimp
- ConvertKit
- SendGrid
- Resend

## Production Checklist

Before going live, ensure:

- [ ] Supabase waitlist table created and tested
- [ ] Environment variables set in Vercel
- [ ] Custom domain (thinkfin.co) configured
- [ ] SSL certificate active (https://)
- [ ] All pages load correctly
- [ ] Waitlist form works (test signup)
- [ ] Error handling works (duplicate email, network errors)
- [ ] Privacy Policy and Terms pages are accessible
- [ ] Footer links work
- [ ] Mobile responsive design tested
- [ ] SEO metadata correct (Open Graph, Twitter Cards)
- [ ] CNAME file present in public folder

## Troubleshooting

### Waitlist Form Not Working

1. Check browser console for errors
2. Verify environment variables in Vercel
3. Check Supabase API key is correct
4. Verify RLS policies in Supabase

### Custom Domain Not Working

1. Check DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Use https://dnschecker.org to verify propagation
4. Ensure SSL certificate is issued in Vercel

### Build Failing

1. Check build logs in Vercel
2. Ensure all dependencies are in package.json
3. Test build locally: `npm run build`
4. Clear build cache in Vercel and redeploy

## Security Notes

1. **Never commit `.env.local`** - Contains sensitive keys
2. **Use environment variables** - All secrets in Vercel settings
3. **Supabase RLS** - Row Level Security enabled on waitlist table
4. **Rate limiting** - Consider adding rate limiting for API routes
5. **Email validation** - Already implemented in API route

## Backup and Maintenance

### Regular Backups

1. Supabase automatic backups (free tier: daily, paid: point-in-time)
2. Export waitlist data weekly
3. Keep backup of environment variables

### Updates

```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Support

For issues or questions:
- Email: devashishjaiswal84@gmail.com
- Documentation: This file

## Next Steps After Launch

1. **Monitor signups** - Check Supabase daily
2. **Add email automation** - Send welcome emails
3. **A/B testing** - Test different CTAs
4. **SEO optimization** - Submit sitemap to Google
5. **Social media** - Share the launch
6. **Product development** - Start building the actual ThinkFin app!

---

**Your site is production-ready!** 🚀

All three critical components are complete:
1. ✅ Domain configuration (thinkfin.co)
2. ✅ Database-backed waitlist
3. ✅ Legal pages (Privacy Policy, Terms of Service)
