CREATE TABLE characteristics_review (
  id SERIAL NOT NULL,
 	characteristic_id INT NOT NULL,
  review_id INT NOT NULL,
  value VARCHAR(10),
  PRIMARY KEY (id),
  FOREIGN KEY (characteristic_id)
  REFERENCES characteristics (id),
  FOREIGN KEY (review_id)
  REFERENCES reviews (id)
);

CREATE TABLE reviews (
	id SERIAL NOT NULL,
	product_id INT NOT NULL,
	rating INT,
	date DATE,
	summary VARCHAR(120),
	body TEXT,
	recommend BOOLEAN,
	reported BOOLEAN,
	reviewer_name VARCHAR(100),
	reviewer_email VARCHAR(100),
	response TEXT,
	helpfulness INT,
  PRIMARY KEY (id)
);

CREATE TABLE photos (
	id SERIAL NOT NULL,
  review_id INT NOT NULL,
  url TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (review_id)
  REFERENCES reviews (id)
);

CREATE TABLE characteristics (
	id SERIAL NOT NULL,
  product_id INT NOT NULL,
  name VARCHAR(20),
  PRIMARY KEY (id)
);
