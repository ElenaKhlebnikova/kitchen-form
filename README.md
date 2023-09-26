# 🍴Create Kitchen Form

Welcome to Create Kitchen Form repository! This form is a part of an application I've collaborated on which allows users to rent out their kitchens. This form allows users to include a wide variety of information to their kitchen's listing such as: description, location, photos, host's languages, rules and availability (recurring and non-recurring).

Click  [here](https://kitchen-form.vercel.app/) to view the project.



## 🏗️ Tech Stack

This form is built with the following tech stack:

| Technology                                                          | Usage                                                                                                          |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Next.js 13 (App Router)                                | Meta React framework for building the application         |
| Vercel                             | To deploy the application       |
|Typescript | To ensure type safety |
|React hook form | To manage the state of the form
| Cloudinary | To upload\delete photos |
| Tailwind                         | CSS framework                                  |
| ESLint/Prettier/Husky                                 | For linting/formatting/Git-hooks                                      
|[Geocode (Geocoding API)](https://geocode.maps.co) | To provide better UX with autocomplete when adding location 


                                                                                    

## 👀 Project Overview

Click  [here](https://startling-travesseiro-2774de.netlify.app/) to view the project.


![Form main](https://i.ibb.co/YyCT8Gj/image.png)

![Form location and rules input](https://i.ibb.co/VJJMhfK/image.png)
![Form multiple select](https://i.ibb.co/86NGKqb/image.png)
![Form availability](https://i.ibb.co/fv94ynY/image.png)

![Errors on custom fields](https://i.ibb.co/wLcQrrJ/image.png)





## 🍅 Features 

1. Fully responsive.
2. Better UX with autocomplete when using location field. 
3. Upload signed photos to Cloudinary.
4. Choose your favourite photo (in the application this photo will be set as main picture)
5. Deleting photos which also deletes them from Cloudinary.
6. Custom multi-select component to select languages.
7. Custom availability fields.
8. Form validation and error handling on both regular fields and custom (where it is required).



## 📖What I have learnt
1. Using React Hook Form.
2. Registering and validating custom fields with React Hook Form.
4. Building custom multiple select component.
5. How to deploy Next.js applications to Vercel (I have previously used Netlify).
6. How to add server and client env variables to vercel.
7. Using Cloudinary to upload signed/unsigned photos.
8. Using Cloudinary to delete signed/unsigned photos.
9. Using Next.js features: file system routing, managing client and server env variables, using route handlers as backend for uploading/deleting photos.
10. How to use Tailwind to build responsive UI much faster.
11. Working on different branches in small PRs. 
12. Resolving git conflicts.


## 😭 What I struggled with
1. Building multi-select and registering it and validating it using React hook form. 
2. Validating custom fields as it is much harder to do than with regular fields since I needed to set errors and clear them when the value is updated. It was not so clear how to do it the right way at first to get the needed behaviour.
3. Using Cloudinary to upload signed photos mainly because Next.js and Cloudinary documentation is not beginner friendly at all. Cloudinary documentation seems to be a bit outdated and it was hard to figure out the way to sign the photos.
4. Using Cloudinary to delete signed photos. Same issue as previously mentioned, but much easier than dealing with the documentation for the first time.
5. Building dynamic availbility fields using useFieldsArray from React hook form. 
6. Validating custom availability fields. The main difficulty is that for form validation only one of these fields is required + these are custom fields. So it was hard to figure out the right way to clear errors.





