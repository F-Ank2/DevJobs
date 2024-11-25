exports.showProyects = (req, res) => {
    
    res.render('home', {
        pageName: 'DevJobs',
        tagLine: 'Find and post jobs for web developers.',
        bar: true,
        bottom: true
    })
}