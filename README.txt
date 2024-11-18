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

## Development Guide  

### How to Change the Content  
1. Open the HTML file.  
2. Change the text and links—just like the old days.  
3. Replace placeholder images in the `images` folder. Same size, remember?  
4. Update the metadata in `<head>` for modern internet magic.  

### How to Develop Locally  
1. Clone the repo:  
   ```bash  
   git clone <repo-url>  
   ```  
2. Go to the folder:  
   ```bash  
   cd solution-folder  
   ```  
3. Install Node dependencies (yes, you need Node):  
   ```bash  
   npm install  
   ```  
4. Start the local server:  
   ```bash  
   npm start  
   ```  
5. Preview your changes locally.  

### How to Build and Test  
1. Build the project:  
   ```bash  
   npm run build  
   ```  
2. Test the build as it will appear on the internet:  
   ```bash  
   npx http-server dist  
   ```  

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

## Feedback  
Love it? Hate it? Found a bug?  
Shoot me an email: **support@23blocks.com**  

Let’s see how this goes.  


## About the base template from html5up.net | @ajlkn
A dark, slick, modern, responsive, adjective-drenched design built around an extremely
dynamic landing page (scroll that mofo!). Inspired by Big Picture, another design
of mine with a similarish feel/flow, only this time I took it waaaaaay further and
actually made it multipurpose (versus copping out and making it a one pager like I
did last time ;) Includes multiple pages, a bunch of pre-styled elements, and all
its Sass sources.

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = Not included)

Feedback, bug reports, and comments are not only welcome, but strongly encouraged :)



Credits:
	Layout, Saas and Template (html5up.net | @ajlkn)
	Demo Images:
		Unsplash (unsplash.com)
	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Scrollex (github.com/ajlkn/jquery.scrollex)
		Responsive Tools (github.com/ajlkn/responsive-tools)
		WebPack

Licenses: 
	Template from html5up.net | @ajlkn - Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
