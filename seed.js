const { green, red } = require('chalk');
const { db, Campus, Student } = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });
    const Allbright = await Campus.create({
      name: 'Allbright',
      address: '124 Cornwall Ave.',
      description:
        "I'm baby ethical wayfarers vinyl poutine air plant neutra shoreditch direct trade deep v iPhone offal",
    });
    const Marfabulb = await Campus.create({
      name: 'Marfabulb',
      address: '345 Sesame Street',
      description:
        'Cliche scenester vice chillwave keytar, waistcoat locavore whatever',
    });
    const TaxidermyArt = await Campus.create({
      name: 'TaxidermyArt',
      address: '987 Hexagon St.',
      description:
        'Unicorn hell of swag street art taxidermy gluten-free. Raw denim irony selfies bitters aesthetic vinyl, hot chicken hashtag ',
    });
    const Jane = await Student.create({
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'JaneSmith@yahoo.com',
      campusId: Marfabulb.id,
    });
    const Will = await Student.create({
      firstName: 'Will',
      lastName: 'Jones',
      email: 'BillyBoy300@gmail.com',
      campusId: TaxidermyArt.id,
    });
    const George = await Student.create({
      firstName: 'George',
      lastName: 'McCallan',
      email: 'brewster45@gmail.com',
      campusId: Marfabulb.id,
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
