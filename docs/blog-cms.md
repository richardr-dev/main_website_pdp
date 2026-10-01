# Blog CMS

Open `https://patuhdata.id/admin/` to create and edit posts. The CMS saves Markdown files to `src/content/blog`; the normal Vercel deployment publishes them.

## First sign-in

The CMS uses GitHub's token login, which avoids running an authentication server. On the sign-in screen, follow the link to create a fine-grained personal access token for `richardr-dev/main_website_pdp`, grant **Contents: Read and write**, then paste the token into the CMS. GitHub users also need write access to the repository.

Keep the token private. It is stored by the CMS in your browser, not in this repository.

## Publishing

1. Choose **Blog posts** and **New Blog post**.
2. Complete the fields and write the article in the visual Markdown editor.
3. Turn on **Published**, then save.
4. Wait for the connected Vercel project to finish its deployment.

Turn on **Pin to homepage** when an article should be recommended. The homepage shows up to three posts: pinned posts first, followed by the latest published posts. If more than three posts are pinned, the three newest pinned posts are shown.

Use a unique, lowercase URL slug with hyphens. Changing a slug after publishing changes the article URL.
