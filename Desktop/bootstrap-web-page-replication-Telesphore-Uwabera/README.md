
```markdown
# Bootstrap 5 Website Replication

This project replicates a one-page website using Bootstrap 5, based on the Braintech Technology IT Solutions HTML Template. The objective is to practice Bootstrap 5 for responsive design and improve HTML/CSS skills by customizing the template.

## Project Structure

```plaintext
bootstrap5-website-replication/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
└── assets/
    ├── images/
    └── fonts/
```

## Setup Instructions

To run this project locally:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Telesphore-Uwabera/bootstrap5-website-replication.git
   ```

2. Open `index.html` in your web browser.

## Customizations Made

- **Color Scheme**: Modified to match [describe your chosen theme].
- **Content**: Replaced placeholder text and images with relevant content.
- **Additional Features**: Implemented smooth scrolling for navigation links using JavaScript.

## Custom Styling Significance

The custom CSS in `styles.css` is crucial for enhancing the design and user experience of the website. Here are some key aspects and their significance:

### General Styles
- **Font and Scroll Behavior**: 
  - Set the font to 'Roboto' for a clean and modern look.
  - Implemented smooth scrolling for a seamless navigation experience.
- **Navbar**: 
  - Customized the navbar brand to be bold and changed the link colors for better visibility and aesthetics.

### Hero Section
- **Background and Text Alignment**: 
  - Used a background image with center alignment and cover to make the hero section visually appealing.
  - Centered text to focus user attention on the main message.

### Services Section
- **Card Hover Effect**: 
  - Added a scale transform on hover to create an interactive experience, making the section more engaging.

### About Section
- **Text Styling**: 
  - Increased font size and line height for better readability and a more professional appearance.

### Portfolio Section
- **Image Hover Effect**: 
  - Similar to the services section, added a scale transform on hover to highlight the portfolio items and encourage user interaction.

### Team Section
- **Card Hover Effect**: 
  - Consistent with other sections, applied a hover effect to team member cards to maintain uniformity and interactivity.

### Contact Section
- **Form Label Styling**: 
  - Made form labels bold to ensure they stand out and improve form usability.

### Footer
- **Padding and Text Alignment**: 
  - Added padding for better spacing and ensured text is aligned properly to maintain a clean layout.

### Back to Top Button
- **Position and Styling**: 
  - Implemented a fixed position and added a hover effect to enhance usability, ensuring users can easily navigate back to the top of the page.

## JavaScript Enhancements

### Smooth Scrolling for Navigation Links

Implemented smooth scrolling for navigation links to provide a seamless user experience. When a navigation link is clicked, the page smoothly scrolls to the corresponding section. This enhances the overall user experience by preventing abrupt jumps and creating a more fluid navigation flow.

```javascript
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
```

### Back to Top Button Functionality

Added a back to top button to improve navigation, especially on longer pages. The button appears when the user scrolls down 300 pixels from the top of the document and smoothly scrolls back to the top when clicked. This feature enhances usability by providing a quick way for users to return to the top of the page without having to manually scroll.

```javascript
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Top';
backToTopButton.className = 'btn btn-primary back-to-top';
document.body.appendChild(backToTopButton);

backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none';

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

## Technologies Used

- **Bootstrap 5**: Front-end framework for responsive design.
- **HTML5**: Structure and content of the web pages.
- **CSS3**: Styling and customization.
- **JavaScript**: Optional for interactivity.

## Contributors

- [Telesphore Uwabera](https://github.com/Telesphore-Uwabera)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
