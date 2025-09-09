document.addEventListener('DOMContentLoaded', function () {
    const investmentData = {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
            label: 'Объём инвестиций (% от ВВП)',
            data: [27, 25, 22, 25, 26, 30],
            borderColor: '#00A450',
            backgroundColor: 'rgba(0, 164, 80, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#00A450',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#00A450',
            borderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    };

    const projectsByRegionData = {
        labels: ['Брестская', 'Витебская', 'Гомельская', 'Гродненская', 'Минская', 'Могилевская'],
        datasets: [{
            label: 'Количество проектов',
            data: [8, 13, 25, 6, 20, 12],
            backgroundColor: [
                '#D92F21',
                '#4ade80',
                '#60a5fa',
                '#fbbf24',
                '#a78bfa',
                '#f472b6'
            ],
            borderColor: '#1e293b',
            borderWidth: 1,
            hoverBackgroundColor: [
                '#f87171',
                '#86efac',
                '#93c5fd',
                '#fcd34d',
                '#c4b5fd',
                '#f9a8d4'
            ],
            hoverBorderColor: '#ffffff',
            hoverOffset: 4
        }]
    };

    const improvementTypesData = {
        labels: ['Инфраструктура', 'Благоустройство', 'Транспорт', 'Экология', 'Коммуникации', 'Гражданские инициативы'],
        datasets: [{
            label: 'Проекты по направлениям (%)',
            data: [24, 20, 17, 15, 12, 12],
            backgroundColor: [
                '#00A450',
                '#D92F21',
                '#3b82f6',
                '#f59e0b',
                '#8b5cf6',
                '#ec4899'
            ],
            borderColor: '#1e293b',
            borderWidth: 1,
            hoverBackgroundColor: [
                '#34d399',
                '#f87171',
                '#60a5fa',
                '#fbbf24',
                '#a78bfa',
                '#f472b6'
            ],
            hoverBorderColor: '#ffffff',
            hoverOffset: 4
        }]
    };
    const investmentConfig = {
        type: 'line',
        data: investmentData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index',
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#2a4b7c',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: {
                        size: 16,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 14
                    },
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return ` ${context.parsed.y}% от ВВП`;
                        }
                    }
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 40,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: '#2a4b7c',
                        font: {
                            size: 12
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    title: {
                        display: true,
                        text: '% от ВВП',
                        color: '#2a4b7c',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#2a4b7c',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.3
                }
            },
            animation: {
                duration: 1000
            }
        }
    };

    const projectsByRegionConfig = {
        type: 'doughnut',
        data: projectsByRegionData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            radius: '70%',
            onHover: (event, chartElement) => {
                event.native.target.style.cursor = chartElement.length ? 'pointer' : 'default';
            },
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#2a4b7c',
                        padding: 15,
                        font: {
                            size: 14
                        }
                    },
                    onHover: (event, legendItem, legend) => {
                        legend.chart.canvas.style.cursor = 'pointer';
                        const chart = legend.chart;
                        chart.setActiveElements([{ datasetIndex: 0, index: legendItem.index }]);
                        chart.update();
                    },
                    onLeave: (event, legendItem, legend) => {
                        legend.chart.canvas.style.cursor = 'default';
                        const chart = legend.chart;
                        chart.setActiveElements([]);
                        chart.update();
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed + ' проектов';
                            }
                            return label;
                        }
                    }
                },
                title: {
                    display: false
                }
            }
        }
    };

    const improvementTypesConfig = {
        type: 'doughnut',
        data: improvementTypesData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            radius: '90%',
            onHover: (event, chartElement) => {
                event.native.target.style.cursor = chartElement.length ? 'pointer' : 'default';
            },
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#2a4b7c',
                        padding: 15,
                        font: {
                            size: 14
                        }
                    },
                    onHover: (event, legendItem, legend) => {
                        legend.chart.canvas.style.cursor = 'pointer';
                        const chart = legend.chart;
                        chart.setActiveElements([{ datasetIndex: 0, index: legendItem.index }]);
                        chart.update();
                    },
                    onLeave: (event, legendItem, legend) => {
                        legend.chart.canvas.style.cursor = 'default';
                        const chart = legend.chart;
                        chart.setActiveElements([]);
                        chart.update();
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed + '% проектов';
                            }
                            return label;
                        }
                    }
                },
                title: {
                    display: false
                }
            }
        }
    };
    const ctxInvestment = document.getElementById('investmentChart').getContext('2d');
    new Chart(ctxInvestment, investmentConfig);

    const ctxProjectsByRegion = document.getElementById('projectsByRegionChart').getContext('2d');
    new Chart(ctxProjectsByRegion, projectsByRegionConfig);

    const ctxImprovementTypes = document.getElementById('improvementTypesChart').getContext('2d');
    new Chart(ctxImprovementTypes, improvementTypesConfig);
    updateAuthUIWithRedirect();

});


