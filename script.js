document.addEventListener('DOMContentLoaded', async () => {
    if (typeof AdController !== 'undefined') {
        try {
            const result = await AdController.show({ blockId: 150 });
            if (result.done) {
                console.log('Ad watched till the end');
            } else {
                console.log('Ad not watched till the end');
            }
        } catch (error) {
            console.error('Error showing ad:', error);
        }
    } else {
        console.error('AdController is not defined');
    }
});
