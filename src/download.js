import { Selector } from 'testcafe'; // first import testcafe selectors
import moment from 'moment'

fixture `Download latest month ov-chipkaart`// declare the fixture
    .page `https://www.ov-chipkaart.nl/mijn-ov-chip.htm`;  // specify the start page


//then create a test and place your code there
test('My first test', async t => {
    let months = [
        'januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november',
        'december'
    ]
    let date = moment().subtract(1, 'months')
    let index = date.month()
    let selectedMonth = months[index] + " " + date.year()

    await t
        .typeText('#username', process.env.OV_USERNAME)
        .typeText('#password', process.env.OV_PASSWORD,  { paste: true })
    await t.click('#btn-login')
    await t.navigateTo('https://www.ov-chipkaart.nl/mijn-ov-chip/mijn-ov-reishistorie.htm')
    await t.click(Selector('span').withText(process.env.OV_PASS_NUMBER))
    await t.wait(3000)
    await t.hover('#dateFilter', { offsetY: -200 })
    await t.click('#select-period')
    await t.click(Selector('li').withText(selectedMonth))
    await t.click('#selected-card')
    await t.click(Selector('button').withText('Download pdf'))
});
