# The Landing Page  
[23blocks.com](https://23blocks.com) | [@23blocks_co](https://twitter.com/23blocks_co)  

## About "The Landing Page" by 23blocks  
Why a Landing Page Project?  
The internet has become too complicated and expensive. Remember the good old days? Just HTML, CSS, JavaScript, and voilà—a website. Now we’re drowning in frameworks, libraries, plugins, minifiers, CMSs, and 10,000 other distractions. We lost the way.  

I needed a landing page—something simple to test ideas.  
- It had to live on a safe URL with SSL, under my domain.  
- I didn’t need 10,000 options. Neither do you.  

Just the essentials:  
- A few images (maybe AI-generated).  
- A good copy (with some help from an LLM).  
- A nice, clean transition.  
- Super responsive.  
- Fast loading.  

And no, I don’t want to pay every single month for Wix, Squarespace, or Framer. They’re great—if you love decision fatigue and overpriced hosting plans.  

Let’s do the math:  
- Framer for 10 pages starts at **$5/month** per page. Add 50 interested users, and you’re looking at **$15/month** for 500 forms. Got 2,500 forms? Boom: **$30/month** per page.  

Multiply that by 10 pages. That’s **$300/month** to maybe, someday, discover if your idea works. No, thank you.  

I want to test 100 ideas, not 10.  

## Enter: The Landing Page by 23blocks  
After some digging, I pulled together:  
- Open-source templates.  
- Webpack (for performance, not for pain).  
- A free GitHub account.  
- A free AWS account.  

And boom—we have a lean setup to spin up landing pages fast, test fast, and (let’s be honest) fail fast.  

## How It Works  
1. Start with a basic landing page template.  
2. Host it on AWS Amplify with SSL and CDN (almost free).  
3. Test your idea on a custom domain without breaking the bank.  

No CMS. No Hugo. No JSON. Just old-fashioned HTML. Find the content, change it, done. Maybe let Copilot or Cursor AI help if you’re feeling fancy.  

Want images? Drop them in a folder. Just make sure they’re the same size as the originals—don’t break my layout, please.  

And don’t forget the header info. It’s all there. SEO, social sharing, you name it.  

## How to Use
### How to Use this template
1. Create Your Own Repository from This Template

   - Click the "Use this template" button on the repository page.
   - Name your new repository (e.g., MyLandingPage).
   - Choose whether to make it public or private.
   - Click "Create repository from template".

2. Clone your own repository
   ```bash  
   git clone git@github.com:YourUserName/TheLandingPage.git  
   ```  
   Go to the folder:  
   ```bash  
   cd TheLandingPage  
   ```  

3. Install Node dependencies (yes, you need Node (version 22 works, use nvm for good sake. Tip: We add .nvmrc, so you can just run nvm use)):  
   ```bash  
   nvm use
   npm install  
   ```  

4. Run the local development server:  
   ```bash  
   npm start  
   ```  

5. Preview changes live in your browser

### How to Build and Test  
1. Build the project:  
   ```bash  
   npm run build  
   ```  
2. Test the build as it will appear on the internet:  
   ```bash  
   npx http-server dist  
   ```  
### How to Change the Landing Page Content  
1. Open the HTML file.  
2. Change the text and links—just like the old days.  
3. Replace placeholder images in the `images` folder. Same size, remember?  
4. Update the metadata in `<head>` for modern internet magic.  

## **Designer Guide**  
Everything you need to tweak and manage this page lives inside the `<section>` divs.  
Not using a section? **Delete it.** Want to move things around? **Go for it.** (But first, check the Marketing Guide to make sure you’re not ditching a key piece of the puzzle.)

There are two main building blocks here: **Spotlight** and **Wrapper**. Think of these as cards—move them, stack them, or leave them as-is (recommended for speed).  

### **Spotlight**  
```html
<section id="casestudies" class="spotlight style3 bottom">
```
- **Use Case:** Great for sections that need a background image or specific positioning for the content.  
- **Customization:** Decide if the content appears at the bottom, right, or left using `style#`.  
- **Navigation:** Comes with handy navigation arrows for scrolling between sections.  
- **Pro Tip:** Double-check your section IDs (e.g., `#casestudies`) and make sure navigation links point to the correct hashtags. Nothing kills the vibe like broken navigation.

### **Wrapper**  
```html
<section id="four" class="wrapper style1 special fade-up">
```
- **Use Case:** Ideal for sections without navigation arrows or those with longer content that doesn’t fit the predefined container.  

## Marketing Guide 
The whole point of this Landing Page is simple: remove the decision fatigue. We’ve done the homework for you, so you don’t have to spend hours debating layouts, fonts, or which shade of orange converts best.

This template is built on proven best practices—everything you need for a high-performing landing page, and nothing you don’t. Every section is crafted to guide your visitors from curious to convinced, with minimal effort on your part.

Here’s what’s included and why each one matters:

### **1. Header**
The navigation hub.  
Every landing page needs a clean header with easy-to-scan links. Keep it simple: logo on the left, key links in the middle, and a bold call-to-action (*Sign Up*, anyone?) on the right. Don’t overwhelm—this is not your LinkedIn profile.

### **2. Banner (Hero Section)**  
This is your "wow" moment.  
Grab attention with a bold headline, a quick punchy subhead, and a killer visual that screams: *“This is what you’re here for.”* Top it off with a simple button or scroll prompt (you know, the thing you actually want people to click).

### **3. Social Proof**
Because trust sells.  
People trust other people—not just you. Add testimonials, stats, or logos that scream credibility. *“This helped us grow 300%!”* is a lot better than *“Trust us.”*

### **4. Benefits**  
Why should they care?  
Break it down for them. What’s in it for them? Use bold headers and punchy text for each benefit. No essays here—nobody has time for that. Pro tip: Pair benefits with icons for extra *oomph*.

### **5. How It Works**  
Show them the magic.  
People don’t want to guess. Walk them through your process in 3 simple steps (not 12). Visuals, icons, or diagrams help make it a no-brainer. Make it feel easy, even if it’s not.

### **6. Case Studies / Testimonials**
Results over promises.  
Don’t just tell them it works—show them. Add real-world examples, case studies, or user stories that prove your template delivers. Numbers and specifics win here.  

### **7. FAQ**  
Answer their doubts before they even ask.  
What’s holding them back? Is it cost, time, or effort? Answer these head-on in a simple Q&A format. Think of the most common questions your mom, friend, or coworker might ask—and solve them here.

### **8. Additional Call-to-Action (CTA)**  
Close the deal.  
Hit them with a clear, direct CTA. *“Get Started Now”* or *“Launch Your Landing Page Today”* beats *“Learn More”* any day. Make this button stand out—it’s doing the heavy lifting.

### **9. Footer**  
The unsung hero of navigation.  
It’s where the details live: social links, policies, contact info, and maybe a bonus CTA. Keep it functional, not fancy. Nobody’s here to admire your footer design.

## **Advanced Use**  
Want to take things to the next level? You can easily transform this landing page into a multi-page website.  

Here’s how:  
1. **Add a New Page**: Create a new HTML file for your additional page.  
2. **Update Webpack**: Include your new file in the Webpack configuration. This ensures it gets built and optimized with the rest of your site.  
3. **Link It**: Add the new page to your menu or navigation links.  

And just like that—**boom**—you’ve got a multi-page website! Whether it’s for FAQs, a blog, or a pricing page, the setup is quick and seamless.  

This version keeps the tone light and engaging while making the instructions clear and actionable. Let me know if you need further refinement!

## How to Deploy  

### Using AWS Amplify  
1. Push your project to a GitHub repo.  
2. Open AWS Amplify, create a new app, and connect it to your repo.  
3. Select a branch. Let Amplify do its thing.  
4. Add a custom domain:  
   - Go to your domain registrar (e.g., GoDaddy).  
   - Add the DNS records Amplify provides.  
   - Wait for DNS propagation.  
5. Done. Your landing page is live under your domain.  

### Using S3 (Not Ideal, but Hey)  
Guide coming soon.  

### Uploading a ZIP File  
Guide also coming soon. Patience, my friend.  

## Why This Matters  
This isn’t about a tool or a template. It’s about freedom. Freedom to create, test, and fail without worrying about overpriced subscriptions or getting lost in decision hell.  

If this works for you, great. If not, also great—I’ll be testing my next 100 ideas while you’re still deciding on a Wix template.  

## Geek Corner  

If you're geeky enough to scroll down this far, welcome. Here's the behind-the-scenes look at the tech that powers this project. It's built to be **easy for you**, the user, but that doesn’t mean we’ve skimped on the modern tools, techniques, and wizardry that make websites fast, SEO-friendly, and downright effective. After all, this isn’t our first rodeo—we’ve been building high-performance, millions-of-users kind of sites for years.  

So, here’s the breakdown of how we built this thing:  

1. **HTML5:**  
   The OG of web development—clear, simple, and rock-solid. Bonus: we threw in lazy loading right out of the gate because why make your users download things they aren’t looking at yet?

2. **Sass:**  
   I know, I know—Sass sounds fancy and complicated, but it’s not. Hear me out. Sass lets us use variables, which means themes, which means a *single* place to tweak colors, fonts, and more. Change once, and it’s done everywhere. It’s like having a universal remote for your styles.

3. **Webpack:**  
   "Wait, wasn’t this about going back to basics?" Yes, but hear me out. Webpack is the magic wand that minifies your code, bundles your files, creates chunks, optimizes images, and purges unused styles. It’s like the Swiss Army knife of modern web development. Plus, it’s the secret sauce behind your ultra-fast landing page.

4. **Service Worker:**  
   "Service what now?" Yes, service workers. They’re the invisible superheroes of the web—handling caching and speeding up load times like nobody’s business. Your users will see your landing page faster than they can say, “Where’s my wallet?”

### What You Get  

Here’s what all that geeky goodness boils down to:  
- A responsive, lightweight **HTML5 template**.  
- A clever, simple **Sass file** that compiles into a sleek CSS grid with themes.  
- A pipeline to **build and optimize everything** into a shiny `dist` folder.  

That’s it. Now, just deploy the `dist` folder to your favorite hosting platform, hook it up to your domain (see **How to Deploy**), and you’re live.

## Feedback  
Love it? Hate it? Found a bug?  
Shoot me an email: **support@23blocks.com**  

Let’s see how this goes.  

### Got Questions?  
Head to **Feedback** or drop us a line on GitHub. And if you just came here to geek out, welcome to the club. 🚀

## License  
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.  

## Acknowledgments

This project incorporates elements from template Landed created by [HTML5 UP](https://html5up.net).  
The original template is licensed under the [Creative Commons Attribution 3.0 License (CC BY 3.0)](https://creativecommons.org/licenses/by/3.0/).  

### What This Means
- You are free to share, modify, and adapt this work for personal or commercial purposes.
- Attribution is required. If you use this project, please credit:
  - HTML5 UP for the original template.
  - 23blocks for modifications, upgrades and additional development.