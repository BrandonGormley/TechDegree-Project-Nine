let refridgeratorDisplays = ['852884', '623782', '773091', '852901', '852888', '623781', '605192', '852887', '749812', '623784', '623786', '847229', '1296191', '912753', '852864', '852868', '852869', '712177', '714644', '753485', '753141', '852872', '533479', '618013', '852870', '1030901', '912756', '51877', '712897', '708951', '719466', '735649', '1161217', '1341474', '1163548', '1295703', '751820', '852876', '1163537', '1110028', '852874', '1341469', '730693', '753010', '754716', '1030903', '1295698', '1110030', '689595', '916724', '1296070', '1296186', '844160', '545256', '1262485', '852875', '1110030', '623777', '970842', '876299'];

let freezerDisplays = ['637401', '1147850', '637400', '637399', '643964', '637398', '617641', '617779', '709106', '646118'];

let rangeDisplays = ['911308', '784523', '845536', '1354365', '751811', '673892', '1261928', '848349', '631869', '845538', '784515', '835800', '634744', '585873', '1117868', '845535', '784521', '617237', '1265110', '911310', '804710', '1264993', '804173', '638523', '878059', '1261930', '876690', '838076', '784513', '784514', '851987', '780432', '878056', '673897', '848340', '986195', '884091', '673895', '829026', '1354360', '1117867', '805153', '1362370', '784522'];

let microwaveDisplays = ['1021613', '1362372', '714799', '673890', '589359', '848354', '714799', '589363', '520300', '439246', '878060', '1441317', '520293', '884089', '878062', '631209', '1362371', '728556', '857403'];

let cooktopDisplays = ['923014', '642853', '817848', '791779', '897520', '1099978', '1295710', '897516', '1295181', '823562', '737418'];

let wallovenDisplays = ['1295184', '785076', '884237', '668300', '604891'];

let dishwasherDisplays = ['838387', '625597', '1285208', '1054845', '1084243', '1083901', '1354366', '1144650', '1296201', '962485', '1353196', '838388', '1441319', '871264', '1083902', '713598', '871263', '1147763', '838384', '1336775', '838377', '1054847', '1054481', '838382', '907509', '358884', '838381', '911314', '1144650', '1147763', '1289014'];

let washerDisplays = ['1258851', '670298', '817721', '637743', '784273', '844404', '1072525', '632519', '670293', '629986', '782472', '794808', '782267', '1258837', '1258851', '705037', '826581', '1216189', '1216180', '1216186', '566001', '740399', '780053', '1258839', '794471', '1072525', '1072528', '751716', '1147852', '1174499', '1100392'];

let dryerDisplays = ['1258852', '705036', '826582', '1216190', '1216181', '1216187', '566002', '835583', '1258840', '794089', '1072526', '1072529', '751717', '1147853', '1174500', '669553', '844405', '632523', '670007', '589158', '670009', '794809', '782268', '751711', '751714', '844769', '629998', '1053426'];

let rangeHoodDisplays = ['804607', '804608', '804610', '804605', '804602'];

let kitchenDisplays = ['733111', '786388', '618006', '820210', '738029', '603591', '638516', '588254', '631869', '848340', '836488', '484278', '644835', '175058', '820992', '517420', '848354', '523987', '737421', '523953'];

let itemNumber = document.getElementById('itemNumber');
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
    if (kitchenDisplays.includes(itemNumber.value)) {
        document.getElementById("answer").innerHTML = '<div class="alert alert-success py-4 mt-4" role="alert"> That Appliance is displayed in one of our kitchen showrooms!</div>';
    } else if (freezerDisplays.includes(itemNumber.value)) {
        document.getElementById("answer").innerHTML = '<div class="alert alert-success py-4 mt-4" role="alert"> That Freezer is on display!</div>';
    } else if (rangeDisplays.includes(itemNumber.value)) {
        document.getElementById("answer").innerHTML = '<div class="alert alert-success py-4 mt-4" role="alert"> That Range is on display!</div>';
    } else if (microwaveDisplays.includes(itemNumber.value)) {
        document.getElementById("answer").innerHTML = '<div class="alert alert-success py-4 mt-4" role="alert"> That Microwave is on display!</div>';
    } else if (cooktopDisplays.includes(itemNumber.value)) {
        document.getElementById("answer").innerHTML = '<div class="alert alert-success py-4 mt-4" role="alert"> That Cooktop is on display!</div>';
    } else if (wallovenDisplays.includes(itemNumber.value)) {
        document.getElementById("answer").innerHTML = '<div class="alert alert-success py-4 mt-4" role="alert"> That Wall Oven is on display!</div>';
    } else if (dishwasherDisplays.includes(itemNumber.value)) {
        document.getElementById("answer").innerHTML = '<div class="alert alert-success py-4 mt-4" role="alert"> That Dishwasher is on display!</div>';
    } else if (washerDisplays.includes(itemNumber.value)) {
        document.getElementById("answer").innerHTML = '<div class="alert alert-success py-4 mt-4" role="alert"> That Washer is on display!</div>';
    } else if (dryerDisplays.includes(itemNumber.value)) {
        document.getElementById("answer").innerHTML = '<div class="alert alert-success py-4 mt-4" role="alert"> That Dryer is on display!</div>';
    } else if (rangeHoodDisplays.includes(itemNumber.value)) {
        document.getElementById("answer").innerHTML = '<div class="alert alert-success py-4 mt-4" role="alert"> That Range Hood is on display over in Aisle 35!</div>';
    } else if (refridgeratorDisplays.includes(itemNumber.value)) {
        document.getElementById("answer").innerHTML = '<div class="alert alert-success py-4 mt-4" role="alert"> That Refridgerator is on display!</div>';
    } else if (itemNumber.value === '') {
        document.getElementById("answer").innerHTML = '<div class="alert alert-warning py-4 mt-4" role="alert"> Uh oh! You must enter an item number to check!</div>';
    } else {
        document.getElementById("answer").innerHTML = '<div class="alert alert-danger py-4 mt-4" role="alert"> That Appliance is not on display at our store :( </div>';
    }
});

