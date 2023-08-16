# 🍴Create Kitchen Form

Welcome to Create Kitchen Form repository! This form is a part of an application I've collaborated on. 



## 🏗️ Tech Stack

Movie is built with the following tech stack:

| Technology                                                          | Usage                                                                                                          |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Next.js                                | Main framework for building the application         |
|Typescript | To typecheck |
|useForm | React Form Hook to build forms
| Cloudinary | To upload images |
| Taiwind                         | CSS framework for building UI                                   |
| ESLint/Prettier/Husky                                 | For linting/formatting/Git-hooks                                      
|Maps (Geocoding API)I | To rovide better UE when adding location 


                                                                                    

## 👀 Project Overview

Click  [here]([https://startling-travesseiro-2774de.netlify.app/]) to view the project.


![Form main](https://i.ibb.co/YyCT8Gj/image.png)

![Form location and rules input](https://i.ibb.co/VJJMhfK/image.png)
![Form multiple select](https://i.ibb.co/86NGKqb/image.png)
![Form availability](https://i.ibb.co/fv94ynY/image.png)

![Errors on custom fields](https://i.ibb.co/wLcQrrJ/image.png)





## 🍅 Features 

1. Fully responsive.
2. Better UE when using location field. 
3. Upload photos to Cloudinary.
4. Choose your favourite photo (in the application this photo will be set as main picture)
5. Delete photos. Photos are deleted from Cloudinary.
6. Custom multiple select component.
7. Custom availability fields.
8. Form validation on both regular fields and custom (where it is required).



## 📖What I have learnt
1. Using React Hook Form.
2. Registering custom fields with React Hook Form.
3. Validating custom fields with React Hhook Form.
4. Building custom multiple select component.
5. Using Cloudinary to upload signed/unsigned photos.
6. Using Cloudinary to delete signed/unsigned photos.
7. Some of the Next.js features.
8. How to use env variables with Next.js.
9. How to use Tailwind to build responsive UI much faster.
10. Working on different branches in small PRs. 
11. Resolving git conflicts.


## 😭 What I struggled with
1. Building multiple select and registering it and validation using useForm hook. 
2. Validating custom fields as it is much harder to do than with regular fields since I needed to set errors and clear them when the value is updated. It was not so clear how to do it the right way at first to get the needed behaviour.
3. Using Cloudinary to upload signed photos. I am sorry, but Next.js feat. Cloudinary documentation is useless. Cloudinary documentation seems to be a bit outdated and it was hard figure out the way to sign the photos.
4. Using Cloudinary to delete signed photos. Same issue as in 3, but much easier than dealing with the documentation for the first time.
5. Building availbility fields using useFieldsArray from useForm. 
6. Building availability field for non-recurring dates. The difficulty was with different the date formats and setting only 3 month from the current date as available fields in the date input. But after cloudinary it's not too much of a struggle. 
7. Validating custom availability fields. The main difficulty is that for form validation only one of these fields is required + these are custom fields. So it was hard to figure out the right way to clear errors.
8. Typescript with Cloudinary.





