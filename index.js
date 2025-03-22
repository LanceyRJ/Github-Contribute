import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
const git = simpleGit();

const dates = [
    '',
    ''
];

const makeCommits = async () => {
    console.log(`Starting commits for ${dates.length} custom dates`);
    
    try {
        for (const date of dates) {
            const currentDate = moment(date);
            const formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');
            const data = { date: formattedDate };
            
            console.log(`\nProcessing date: ${currentDate.format('YYYY-MM-DD')}`);
            
            const commitsPerDay = random.int(1, 5);
            console.log(`Making ${commitsPerDay} commits for this day`);
            
            for (let j = 0; j < commitsPerDay; j++) {
                console.log(`- Making commit ${j + 1}/${commitsPerDay}`);
                jsonfile.writeFileSync(path, data);
                await git.add([path]);
                await git.commit(`commit for ${formattedDate}`, {
                    '--date': `"${formattedDate}"`
                });
            }
        }
        
        console.log('\nPushing all commits to repository...');
        await git.push();
        console.log('✅ All commits have been pushed successfully!');
    } catch (err) {
        console.error('❌ Error:', err);
    }
};

makeCommits().then(() => {
    console.log('Script completed');
});