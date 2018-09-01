// 1

function userCard(key) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        time = new Date().toLocaleString('en-GB'),
        tax = 0.5;


    function historyLog(operationType, credits, operationTime) {
        historyLogs.push({
            operationType: operationType,
            credits: credits,
            operationTime: operationTime
        });
    }

    return {
        getCardOptions() {
            return { balance, transactionLimit, historyLogs, key };
        },

        putCredits(amount) {
            balance += amount;

            historyLog(`Recieved credits`, amount, time);
        },

        takeCredits(amount) {
            balance -= amount;

            historyLog(`Withdrawal of credits`, amount, time);
        },

        setTransactionLimit(amount) {
            transactionLimit = amount;

            historyLog(`Transaction limit change`, amount, time);
        },

        transferCredits(amount, card) {
            const withTax = amount * tax + amount;

            if (balance < withTax) {
                console.log(`Error: You can't transfer credits - balance exceeded.`);
            } else if (transactionLimit < withTax) {
                console.log(`Error: You can't transfer credits - transaction limit exceeded.`)
            } else {
                this.takeCredits(withTax);
                card.putCredits(amount);
            }
        }
    };
}

// 2

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.cardLimit = 3;
    }

    addCard() {
        if (this.cards.length < this.cardLimit) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log('You have reached the maximum amount of cards.');
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}