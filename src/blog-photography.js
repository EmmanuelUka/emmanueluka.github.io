import img1 from './assets/umuahia-war-museum.jpeg';
import img2 from './assets/umuahia-fmc.jpeg';
import img3 from './assets/five-cowries-creek.jpeg';
// ...import more images

function Blog() {
  const posts = [
    {
      image: img1,
      title: "Red Sand",
      location: "Umuahia, Abia State, Nigeria",
      description: "A stunning evening capture with golden sunlight reflecting on the water."
    },
    {
      image: img2,
      title: "Federal Medical Center",
      location: "Umuahia, Abia State, Nigeria",
      description: "Capturing the energy of the city during rush hour."
    },
    {
      image: img3,
      title: "Five Cowries Creek",
      location: "Lagos Island, Lagos Nigeria",
      description: "Fall colors are at their peak, perfect for a quiet stroll."
    },
    // add more posts here
  ];

  return (
    <section className="blog-section">
      <h1 className="section-title">Photography & Blog</h1>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-info">
              <h3>{post.title}</h3>
              <p className="blog-location">{post.location}</p>
              <p className="blog-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;