from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/skills')
def skills():
    return render_template('skills.html')


@app.route('/work-single')
def work_single():
    return render_template('work-single.html')


@app.route('/project-supervised')
def project_supervised():
    return render_template('project-supervised.html')


@app.route('/project-unsupervised')
def project_unsupervised():
    return render_template('project-unsupervised.html')


@app.route('/project-markov')
def project_markov():
    return render_template('project-markov.html')


@app.route('/project-cdata')
def project_cdata():
    return render_template('project-cdata.html')


@app.route('/project-magent')
def project_magent():
    return render_template('project-magent.html')


@app.route('/project-multi-modal')
def project_multi_modal():
    return render_template('project-multi-modal.html')


@app.route('/project-drones')
def project_drones():
    return render_template('project-drones.html')


@app.route('/project-modeling')
def project_modeling():
    return render_template('project-modeling.html')


@app.route('/project-data-pipeline')
def project_data_pipeline():
    return render_template('project-data-pipeline.html')


@app.route('/works')
def works():
    return render_template('works.html')


@app.route("/contact")
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True)
