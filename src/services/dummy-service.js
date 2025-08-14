const dummyService = {
    helper: () => {
        const num = Math.floor(Math.random() * 10);
        return num % 2 == 0;
    },
    
    execute: () => {
        const result = dummyService.helper();
        if(result) {
            return 'Learning JS';
        } else {
            return "Learning ReactJS";
        }
    }
};

export default dummyService;