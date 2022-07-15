const { green, red } = require('chalk');
const { db, Campus, Student } = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });
    const Allbright = await Campus.create({
      name: 'Allbright',
      address: '124 Cornwall Ave.',
      description:
        "It's a place where students are challenged to make good decisions and lead in positive ways in their school.",
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBtoiHFrDsozalD-Z5AK13BSX8fHEtY-CWQ&usqp=CAU',
    });
    const Marfabulb = await Campus.create({
      name: 'Marfabulb',
      address: '345 Sesame Street',
      description:
        'a positive place where students can go to have fun with friends, talk about relevant issues and be heard without judgment.',
      imageUrl:
        'https://tech.cornell.edu/wp-content/uploads/2018/06/dedication_press_release_feature.jpg ',
    });
    const TaxidermyArt = await Campus.create({
      name: 'TaxidermyArt',
      address: '987 Hexagon St.',
      description:
        'Set in 3 acres of beautiful gardens, the grounds  are safe and idyllic. TA offers perfect surroundings for perfect learning.',
      imageUrl:
        'https://www.designbuild-network.com/wp-content/uploads/sites/26/2017/10/1l-image-61.jpg',
    });
    const Jane = await Student.create({
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'JaneSmith@yahoo.com',
      campusId: Marfabulb.id,
      gpa: 3.2,
    });
    const Will = await Student.create({
      firstName: 'Will',
      lastName: 'Jones',
      email: 'BillyBoy300@gmail.com',
      campusId: TaxidermyArt.id,
      gpa: 2.7,
    });
    const George = await Student.create({
      firstName: 'George',
      lastName: 'McCallan',
      email: 'brewster45@gmail.com',
      campusId: Marfabulb.id,
      gpa: 4.0,
    });

    // seed your database here!
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
